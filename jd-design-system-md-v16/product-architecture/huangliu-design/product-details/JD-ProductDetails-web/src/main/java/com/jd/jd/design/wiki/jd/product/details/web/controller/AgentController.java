
package com.jd.jd.design.wiki.jd.product.details.web.controller;
import com.jd.framework.ai.agent.client.AgentMessage;
import com.jd.jd.design.wiki.jd.product.details.app.agent.MultiAgent;
import com.jd.jd.design.wiki.jd.product.details.app.config.MultiAgentConfiguration;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.messages.ToolResponseMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import reactor.core.publisher.Flux;

import java.util.HashSet;
import java.util.Set;

@Slf4j
@Controller
@RequestMapping("/agent")
public class AgentController {

    private static final String REACT_DEFAULT_MSG = "根据北京天气写一篇500字散文，用HTML返回";

    private static final String PARALLEL_DEFAULT_MSG = "主题是北京天气，用HTML返回";

    private static final String SEQUENTIAL_DEFAULT_MSG = "主题是北京天气，用HTML返回";

    private static final String ROUTING_DEFAULT_MSG = "根据北京天气写一篇500字散文，用HTML返回";

    @Autowired
    private MultiAgent multiAgent;

    @RequestMapping(path = "/index", produces= "text/html;charset=UTF-8")
    @ResponseBody
    public String index() {
        return "<!DOCTYPE html>\n" +
                "<html>\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Agent Guide</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <h1>请选择能力：</h1>\n" +
                "    <ul>\n" +
                "        <li><a href=\"/agent/react?msg=" + REACT_DEFAULT_MSG + "\" target=\"_blank\">React(输入：" + REACT_DEFAULT_MSG + ")</a></li>\n" +
                "        <li><a href=\"/agent/parallel?msg=" + PARALLEL_DEFAULT_MSG + "\" target=\"_blank\">Parallel(输入：" + PARALLEL_DEFAULT_MSG + ")</a></li>\n" +
                "        <li><a href=\"/agent/sequential?msg=" + SEQUENTIAL_DEFAULT_MSG + "\" target=\"_blank\">Sequential(输入：" + SEQUENTIAL_DEFAULT_MSG + ")</a></li>\n" +
                "        <li><a href=\"/agent/routing?msg=" + ROUTING_DEFAULT_MSG + "\" target=\"_blank\">Routing(输入：" + ROUTING_DEFAULT_MSG + ")</a></li>\n" +
                "    </ul>\n" +
                "</body>\n" +
                "</html>";
    }

    @RequestMapping(path = "/react", produces= "text/html;charset=UTF-8")
    @ResponseBody
    public Flux<String> react(@RequestParam(name = "msg",defaultValue = REACT_DEFAULT_MSG) String msg) {
        return handleAgentMessage(multiAgent.reactAgentStream(msg));
    }

    @RequestMapping(path = "/sequential", produces= "text/html;charset=UTF-8")
    @ResponseBody
    public Flux<String> sequential(@RequestParam(name = "msg",defaultValue = SEQUENTIAL_DEFAULT_MSG) String msg) {
        return handleAgentMessage(multiAgent.sequentialAgentStream(msg));
    }

    @RequestMapping(path = "/routing", produces= "text/html;charset=UTF-8")
    @ResponseBody
    public Flux<String> routing(@RequestParam(name = "msg",defaultValue = ROUTING_DEFAULT_MSG) String msg) {
        return handleAgentMessage(multiAgent.routingAgentStream(msg));
    }

    @RequestMapping(path = "/parallel", produces= "text/html;charset=UTF-8")
    @ResponseBody
    public Flux<String> parallel(@RequestParam(name = "msg",defaultValue = PARALLEL_DEFAULT_MSG) String msg) {
        try {
            return multiAgent.parallelAgentStream(msg)
                    .mapNotNull(am -> {
                        // 并行流会同时返回多个智能体输出，简单String流无法展示，因此只展示最终结果
                        if(AgentMessage.Step.FINAL_ANSWER.equals(am.getStep()) && am.getAssistantMessage() != null && am.getAssistantMessage().getText() != null) {
                            return "<br>智能体[" + am.getAgent() + "]输出: " + am.getAssistantMessage().getText();
                        }

                        if(am.getToolResponseMessage() != null) {
                            StringBuilder data = new StringBuilder();
                            for (ToolResponseMessage.ToolResponse respons : am.getToolResponseMessage().getResponses()) {
                                data.append("<br>智能体[")
                                        .append(am.getAgent())
                                        .append("]调用工具:[")
                                        .append(respons.name())
                                        .append("]， 结果:[")
                                        .append(respons.responseData())
                                        .append("]<br>");
                            }
                            return data.toString();
                        }
                        return "";
                    });

        } catch (Exception e) {
            log.error("call agent error", e);
            return Flux.just("call agent error:" + e.getMessage());
        }
    }

    private Flux<String> handleAgentMessage(Flux<AgentMessage> agentMessageFlux) {
        Set<String> agentSet = new HashSet<>();

        try {
            return agentMessageFlux.mapNotNull(am -> {
                if(am.getAssistantMessage() != null && StringUtils.hasText(am.getAssistantMessage().getText())) {
                    if(!agentSet.contains(am.getAgent())) {
                        agentSet.add(am.getAgent());
                        return "智能体[" + am.getAgent() + "]输出: " + am.getAssistantMessage().getText();
                    } else {
                        return am.getAssistantMessage().getText();
                    }
                }

                if(am.getToolResponseMessage() != null) {
                    StringBuilder data = new StringBuilder();
                    for (ToolResponseMessage.ToolResponse respons : am.getToolResponseMessage().getResponses()) {
                        data.append("<br>智能体[")
                                .append(am.getAgent())
                                .append("]调用工具:[")
                                .append(respons.name())
                                .append("]， 结果:[")
                                .append(respons.responseData())
                                .append("]<br>");
                    }
                    return data.toString();
                }
                return "";
            });
        } catch (Exception e) {
            return Flux.just("call agent error:" + e.getMessage());
        }
    }
}
