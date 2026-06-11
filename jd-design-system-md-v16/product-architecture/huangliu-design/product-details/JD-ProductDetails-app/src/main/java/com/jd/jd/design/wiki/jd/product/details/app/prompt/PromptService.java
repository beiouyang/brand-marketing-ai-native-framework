

package com.jd.jd.design.wiki.jd.product.details.app.prompt;
import org.springframework.beans.factory.annotation.Autowired;
import com.jd.ducc.ai.prompt.ConfigurablePromptTemplateFactory;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.stereotype.Service;

@Service
public class PromptService {

    private PromptTemplate promptTemplate = new PromptTemplate("你是一个智能助手，你的任务是帮助用户完成各种任务。");

    @Autowired
    ConfigurablePromptTemplateFactory promptTemplateFactory;

    public Prompt getDefault() {

        return promptTemplateFactory.create("promptDemo", "你是一个智能助手，你的任务是帮助用户完成各种任务。").create();
    }

}

