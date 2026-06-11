
package com.jd.jd.design.wiki.jd.product.details.app.config;

import io.micrometer.observation.ObservationRegistry;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.client.advisor.MessageChatMemoryAdvisor;
import org.springframework.ai.chat.memory.ChatMemory;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ChatClientConfiguration {

    // 指定模型
    @Bean
    public ChatClient chatClient(ChatClient.Builder chatClientBuilder, ChatMemory chatMemory) {
        return chatClientBuilder
                .defaultAdvisors(MessageChatMemoryAdvisor.builder(chatMemory).build())
                .build();
    }

    // 指定模型2
    @Bean("modele2ChatClient")
    public ChatClient modele2ChatClient(@Qualifier("model2") ChatModel modele2Model, ObservationRegistry observationRegistry) {
        return ChatClient.create(modele2Model, observationRegistry);
    }

    // 指定模型3
    @Bean("modele3ChatClient")
    public ChatClient modele3ChatClient(@Qualifier("model3") ChatModel modele3Model,ObservationRegistry observationRegistry,ChatMemory chatMemory) {
        ChatClient client = ChatClient.create(modele3Model, observationRegistry);

        MessageChatMemoryAdvisor memoryAdvisor = MessageChatMemoryAdvisor.builder(chatMemory).build();

        return client.mutate().defaultAdvisors(memoryAdvisor).build();
    }
}
