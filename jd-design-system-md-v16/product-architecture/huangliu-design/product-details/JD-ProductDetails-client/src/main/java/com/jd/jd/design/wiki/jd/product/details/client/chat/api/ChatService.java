
package com.jd.jd.design.wiki.jd.product.details.client.chat.api;

import com.jd.jd.design.wiki.jd.product.details.client.chat.dto.ChatDTO;
import com.jd.jd.design.wiki.jd.product.details.client.chat.param.ChatParam;

/**
 * @author DongBoot
 * @date 2024-11-29
 */
public interface ChatService {

    ChatDTO chat(ChatParam param);

}

