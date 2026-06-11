
package com.jd.jd.design.wiki.jd.product.details.app.memory;

import org.springframework.ai.chat.memory.ChatMemory;
import org.springframework.ai.chat.memory.ChatMemoryRepository;
import org.springframework.ai.chat.memory.MessageWindowChatMemory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import javax.annotation.Nullable;

@Configuration
public class ChatMemoryConfig {

    @Bean
    public ChatMemory chatMemory(@Nullable ChatMemoryRepository chatMemoryRepository) {
        return MessageWindowChatMemory.builder().chatMemoryRepository(chatMemoryRepository)
                .maxMessages(10)
                .build();
    }
}

