
package com.jd.jd.design.wiki.jd.product.details.app.api.impl;

import com.jd.jd.design.wiki.jd.product.details.app.agent.ChatClientAgent;
import com.jd.jd.design.wiki.jd.product.details.client.chat.api.ChatService;
import com.jd.jd.design.wiki.jd.product.details.client.chat.dto.ChatDTO;
import com.jd.jd.design.wiki.jd.product.details.client.chat.param.ChatParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatServiceImpl implements ChatService {

    @Autowired
    ChatClientAgent chatClientAgent;

    public ChatDTO chat(ChatParam param) {
        return new ChatDTO(chatClientAgent.base(param.getInput(), param.getChatID()));
    }

}

