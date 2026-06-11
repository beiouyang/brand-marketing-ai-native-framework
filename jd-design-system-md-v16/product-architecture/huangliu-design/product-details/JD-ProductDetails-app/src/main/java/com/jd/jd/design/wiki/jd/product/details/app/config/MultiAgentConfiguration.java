
package com.jd.jd.design.wiki.jd.product.details.app.config;

import com.jd.framework.ai.agent.Agent;
import com.jd.framework.ai.agent.multi.LlmRoutingAgent;
import com.jd.framework.ai.agent.multi.ParallelAgent;
import com.jd.framework.ai.agent.multi.SequentialAgent;
import com.jd.framework.ai.agent.react.ReactAgent;
import com.jd.framework.ai.joysafety.JoySafetyAdvisor;
import com.jd.jd.design.wiki.jd.product.details.app.prompt.PromptService;
import com.jd.jd.design.wiki.jd.product.details.app.tools.LocalToolsService;
import org.springframework.ai.chat.client.advisor.MessageChatMemoryAdvisor;
import org.springframework.ai.chat.memory.ChatMemory;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.support.ToolCallbacks;
import org.springframework.ai.tool.ToolCallbackProvider;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class MultiAgentConfiguration {

    public static final String REACT_AGENT = "reactAgent";

    public static final String POEM_REACT_AGENT = "poemReactAgent";

    public static final String PROSE_REACT_AGENT = "proseReactAgent";

    public static final String SEQUENTIAL_AGENT = "sequentialAgent";

    public static final String PARALLEL_AGENT = "parallelAgent";

    public static final String ROUTING_AGENT = "routingAgent";

    @Bean(name = REACT_AGENT)
    public Agent reactAgent(ChatModel chatModel,
                            LocalToolsService localToolsService,
                            PromptService promptService,
                            ChatMemory chatMemory,
                            VectorStore vectorStore,
                            JoySafetyAdvisor joySafetyAdvisor,
                            ToolCallbackProvider toolCallbackProvider) {

        return ReactAgent.builder()
                .name("react_agent")
                .model(chatModel)
                .advisors(List.of(
                        MessageChatMemoryAdvisor.builder(chatMemory).build()
//                        joySafetyAdvisor,  // 如需审查/向量召回模块请打开此注释，注意，审查模块可能会影响模型返回速度
//                        RetrievalAugmentationAdvisor.builder().documentRetriever(VectorStoreDocumentRetriever.builder().vectorStore(vectorStore).build()).build()
                        ))
                .description("react agent")
                .systemPrompt(() -> promptService.getDefault())
                .tools(ToolCallbacks.from(localToolsService)) // 本地工具
//                .tools(toolCallbackProvider.getToolCallbacks()) // MCP工具
                .build();
    }


    @Bean(PARALLEL_AGENT)
    public Agent parallelAgent(ChatModel chatModel,
                               LocalToolsService localToolsService,
                               @Qualifier(POEM_REACT_AGENT) Agent poemReactAgent,
                               @Qualifier(PROSE_REACT_AGENT) Agent proseReactAgent) {

        ParallelAgent parallelAgent = ParallelAgent.builder()
                .name("parallel_creative_agent")
                .description("并行执行多个创作任务")
                .subAgents(List.of(poemReactAgent, proseReactAgent))
                .build();

        return parallelAgent;
    }

    @Bean(ROUTING_AGENT)
    public Agent routingAgent(ChatModel chatModel,
                              LocalToolsService localToolsService,
                              @Qualifier(POEM_REACT_AGENT) Agent poemReactAgent,
                              @Qualifier(PROSE_REACT_AGENT) Agent proseReactAgent) {

        LlmRoutingAgent blogAgent = LlmRoutingAgent.builder()
                .name("blog_agent")
                .model(chatModel)
                .description("根据用户给定的主题写文章或作诗。")
                .subAgents(List.of(proseReactAgent, poemReactAgent))
                .build();

        return blogAgent;
    }

    @Bean(name = POEM_REACT_AGENT)
    public Agent poemReactAgent(ChatModel chatModel,
                                LocalToolsService localToolsService) {
        return ReactAgent.builder()
                .name("poem_writer_agent")
                .model(chatModel)
                .description("现代诗AI助手")
                .systemPrompt("你是一个知名的现代诗人，擅长写现代诗。根据输入的主题，创作一首现代诗。请专注于诗歌创作，确保语言精炼、意象丰富。")
                .outputKey("poem_result")
                .tools(ToolCallbacks.from(localToolsService))
                .build();
    }

    @Bean(name = PROSE_REACT_AGENT)
    public Agent proseReactAgent(ChatModel chatModel,
                                 LocalToolsService localToolsService) {
        return ReactAgent.builder()
                .name("prose_writer_agent")
                .model(chatModel)
                .description("散文AI助手")
                .systemPrompt("你是一个知名的散文作家，擅长写优美的散文。根据输入的主题，创作一篇100字左右的散文。请专注于散文创作，确保内容优美、意境深远。")
                .outputKey("prose_result")
                .tools(ToolCallbacks.from(localToolsService))
                .build();
    }


    @Bean(name = SEQUENTIAL_AGENT)
    public Agent sequentialAgent(ChatModel chatModel, LocalToolsService localToolsService) {
        ReactAgent writerAgent = ReactAgent.builder()
                .name("abstract_agent")
                .model(chatModel)
                .description("文章大纲AI助手")
                .systemPrompt("你是一个知名的作家，请根据用户的提问输出文章大纲。")
                .outputKey("abstract")
                .tools(ToolCallbacks.from(localToolsService))
                .build();

        ReactAgent reviewerAgent = ReactAgent.builder()
                .name("writer_agent")
                .model(chatModel)
                .description("内容丰富AI助手")
                .systemPrompt("你是一个知名的作家，根据输入的文章大纲，输出一篇对应的文章")
                .outputKey("article")
                .build();

        SequentialAgent blogAgent = SequentialAgent.builder()
                .name("article_agent")
                .description("根据用户给定的主题写一篇文章，首先生成大纲，然后丰富内容。")
                .subAgents(List.of(writerAgent, reviewerAgent))
                .build();
        return blogAgent;
    }

}

