
package com.jd.jd.design.wiki.jd.product.details.web.controller;

import com.jd.framework.boot.doc.annotation.Api;
import com.jd.jd.design.wiki.jd.product.details.app.agent.ChatClientAgent;
import com.jd.jd.design.wiki.jd.product.details.web.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import reactor.core.publisher.Flux;

/**
 * Description: Web Demo
 *
 * @author DongBoot
 */

@Controller
@Api(value = "脚手架服务API", description = "测试脚手架组件服务")
@RequestMapping("/chat")
public class ChatController {

    @Autowired
    private ChatClientAgent chatClientAgent;

    @RequestMapping("/base")
    @ResponseBody
    public Result<String> base(@RequestParam(name = "msg",defaultValue = "脚手架是什么") String msg,
                               @RequestParam(name = "chatId",defaultValue = "0") Long chatId) {
        try {
            return new Result<>(chatClientAgent.base(msg, chatId));
        } catch (Exception e) {
            return new Result<>(e.getMessage());
        }
    }

    @RequestMapping("/base2")
    @ResponseBody
    public Result<String> base2(@RequestParam(name = "msg",defaultValue = "脚手架是什么") String msg,@RequestParam(name = "chatId",defaultValue = "0") Long chatId) {
        try {
            return new Result<>(chatClientAgent.base2(msg, chatId));
        } catch (Exception e) {
            return new Result<>(e.getMessage());
        }
    }

    @RequestMapping("/base3")
    @ResponseBody
    public Result<String> base3(@RequestParam(name = "msg",defaultValue = "脚手架是什么") String msg,@RequestParam(name = "chatId",defaultValue = "0") Long chatId) {
        try {
            return new Result<>(chatClientAgent.base3(msg, chatId));
        } catch (Exception e) {
            return new Result<>(e.getMessage());
        }
    }


    @RequestMapping("/tools")
    @ResponseBody
    public Result<String> tools(@RequestParam(name = "msg",defaultValue = "北京的天气") String msg,
                                @RequestParam(name = "chatId",defaultValue = "0") Long chatId) {
        try {
            return new Result<>(chatClientAgent.tools(msg, chatId));
        } catch (Exception e) {
            return new Result<>(e.getMessage());
        }
    }

    @RequestMapping("/mcp")
    @ResponseBody
    public Result<String> mcp(@RequestParam(name = "msg",defaultValue = "现在的时间") String msg,
                              @RequestParam(name = "chatId",defaultValue = "0") Long chatId) {
        try {
            return new Result<>(chatClientAgent.mcp(msg, chatId));
        } catch (Exception e) {
            return new Result<>(e.getMessage());
        }
    }

    @RequestMapping("/vector")
    @ResponseBody
    public Result<String> vector(@RequestParam(name = "msg",defaultValue = "北京的天气") String msg,
                                 @RequestParam(name = "chatId",defaultValue = "0") Long chatId) {
        try {
            return new Result<>(chatClientAgent.vector(msg, chatId));
        } catch (Exception e) {
            return new Result<>(e.getMessage());
        }
    }

    @RequestMapping(path = "/flux", produces="text/html;charset=UTF-8")
    @ResponseBody
    public Flux<String> flux(@RequestParam(name = "msg",defaultValue = "脚手架是什么") String msg,
                             @RequestParam(name = "chatId",defaultValue = "0") Long chatId) {
        try {
            return chatClientAgent.flux(msg, chatId);
        } catch (Exception e) {
            return Flux.just(e.getMessage());
        }
    }

    @RequestMapping(path = "/think", produces="text/html;charset=UTF-8")
    @ResponseBody
    public Flux<String> think(@RequestParam(name = "msg",defaultValue = "脚手架是什么") String msg,
                              @RequestParam(name = "chatId",defaultValue = "0") Long chatId) {
        try {
            return chatClientAgent.think(msg, chatId);
        } catch (Exception e) {
            return Flux.just(e.getMessage());
        }
    }

}

