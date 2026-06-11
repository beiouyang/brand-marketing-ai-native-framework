
package com.jd.jd.design.wiki.jd.product.details.client.chat.param;

/**
 * Description: ReqDTO
 *
 * @author DongBoot
 * @date 2024-11-29
 */
public class ChatParam {

    private String input;

    private String[] toolsList;

    private Long chatID;

    public Long getChatID() {
        return chatID;
    }

    public void setChatID(Long chatID) {
        this.chatID = chatID;
    }

    public String[] getToolsList() {
        return toolsList;
    }
    public void setToolsList(String[] toolsList) {
        this.toolsList = toolsList;
    }

    public String getInput() {
        return input;
    }

    public void setInput(String input) {
        this.input = input;
    }
}
