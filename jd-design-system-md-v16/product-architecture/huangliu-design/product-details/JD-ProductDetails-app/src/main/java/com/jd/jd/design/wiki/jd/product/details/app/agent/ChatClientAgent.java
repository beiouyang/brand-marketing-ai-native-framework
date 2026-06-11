
package com.jd.jd.design.wiki.jd.product.details.app.agent;

import com.jd.component.common.util.StringUtils;
import com.jd.framework.ai.joysafety.JoySafetyAdvisor;
import com.jd.framework.ai.model.joyai.JoyAiAssistantMessage;
import com.jd.jd.design.wiki.jd.product.details.app.constant.Constants;
import com.jd.jd.design.wiki.jd.product.details.app.prompt.PromptService;
import com.jd.jd.design.wiki.jd.product.details.app.tools.LocalToolsService;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.client.advisor.MessageChatMemoryAdvisor;
import org.springframework.ai.chat.memory.ChatMemory;
import org.springframework.ai.rag.advisor.RetrievalAugmentationAdvisor;
import org.springframework.ai.rag.retrieval.search.VectorStoreDocumentRetriever;
import org.springframework.ai.tool.ToolCallbackProvider;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import java.util.concurrent.atomic.AtomicBoolean;
import org.springframework.ai.content.Media;
import org.springframework.util.MimeTypeUtils;
import java.net.URI;

@Service
public class ChatClientAgent {

    // ChatClient方式：指定模型1
    @Autowired
    private ChatClient chatClient;

    // ChatClient方式：指定模型2
    @Autowired
    private ChatClient modele2ChatClient;

    // ChatClient方式：指定模型3
    @Autowired
    private ChatClient modele3ChatClient;

    @Autowired
    private LocalToolsService localToolsService;
    @Autowired
    private VectorStore vectorStore;

    @Autowired
    private JoySafetyAdvisor joySafetyAdvisor;
    @Autowired
    private ToolCallbackProvider toolCallbackProvider;

    @Autowired
    private PromptService promptService;

    public String base(String message, Long chatId) {
        return chatClient
                .prompt(promptService.getDefault())
                .user(message)
//                .advisors(joySafetyAdvisor) // 如需审查模块请打开此注释，注意，审查模块可能会影响模型返回速度
                .advisors(a -> a.param(ChatMemory.CONVERSATION_ID, chatId == null ? Constants.DEFAULT_CHAT_ID : chatId))
                .call()
                .content();
    }

    public String base2(String message, Long chatId) {
        return modele2ChatClient
            .prompt(promptService.getDefault())
            .user(message)
            .advisors(a -> a.param(ChatMemory.CONVERSATION_ID, chatId))
            .call()
            .content();
    }

    public String base3(String message, Long chatId) {
        ChatClient.ChatClientRequestSpec request = modele3ChatClient.prompt(promptService.getDefault())
            .user(u -> u
            .text("请根据这张图片进行分析，提取里面的主要文字")  // 用户消息
            .media(Media.builder()
            .mimeType(MimeTypeUtils.IMAGE_JPEG)
            .data(URI.create("http://storage.jd.local/baidu-user/yyzz.png"))
            .build()))
            .advisors(a -> a.param(ChatMemory.CONVERSATION_ID, chatId));
        return request.call().content();
    }

    public String tools(String message, Long chatId) {
        return chatClient
                .prompt(promptService.getDefault())
                .user(message)
                .tools(localToolsService)
                .advisors(a -> a.param(ChatMemory.CONVERSATION_ID, chatId == null ? Constants.DEFAULT_CHAT_ID : chatId))
                .call()
                .content();
    }

    public String mcp(String message, Long chatId) {
        return chatClient
                .prompt(promptService.getDefault())
                .user(message)
                .toolCallbacks(toolCallbackProvider.getToolCallbacks())
                .advisors(a -> a.param(ChatMemory.CONVERSATION_ID, chatId == null ? Constants.DEFAULT_CHAT_ID : chatId))
                .call()
                .content();
    }

    public String vector(String message, Long chatId) {
        return chatClient
                .prompt(promptService.getDefault())
                .user(message)
                .advisors(a -> a.param(ChatMemory.CONVERSATION_ID, chatId == null ? Constants.DEFAULT_CHAT_ID : chatId))
                .advisors(RetrievalAugmentationAdvisor.builder().documentRetriever(VectorStoreDocumentRetriever.builder().vectorStore(vectorStore).build()).build())
                .call()
                .content();
    }


    public Flux<String> flux(String message, Long chatId) {
        AtomicBoolean hasSentSeparator = new AtomicBoolean(false);
        return chatClient
                .prompt(promptService.getDefault())
                .user(message)
                .advisors(a -> a.param(ChatMemory.CONVERSATION_ID, chatId == null ? Constants.DEFAULT_CHAT_ID : chatId))
                .stream()
                .content();
    }

    public Flux<String> think(String message, Long chatId) {
        AtomicBoolean hasSentSeparator = new AtomicBoolean(false);
        return chatClient
                .prompt(promptService.getDefault())
                .user(message)
                .advisors(a -> a.param(ChatMemory.CONVERSATION_ID, chatId == null ? Constants.DEFAULT_CHAT_ID : chatId))
                .stream()
                .chatResponse()
                .mapNotNull(chatResponse -> {
                    JoyAiAssistantMessage assistantMessage = (JoyAiAssistantMessage) chatResponse.getResult().getOutput();

                    String content = null;
                    boolean isFinalAnswer = false;

                    // 优先处理思考内容
                    if (assistantMessage.getResoningContent() != null) {
                        content = assistantMessage.getResoningContent();
                    }
                    // 处理正式回答
                    else if (assistantMessage.getText() != null) {
                        content = assistantMessage.getText();
                        isFinalAnswer = true;
                    }

                    if (StringUtils.isBlank(content)) {
                        return null;
                    }

                    // 添加分隔符（思考到回答的过渡）
                    if (isFinalAnswer && !hasSentSeparator.get()) {
                        hasSentSeparator.set(true);
                        return "<br>--- 思考过程结束 ---<br>" + content;
                    }

                    return content;
                });
    }

}

