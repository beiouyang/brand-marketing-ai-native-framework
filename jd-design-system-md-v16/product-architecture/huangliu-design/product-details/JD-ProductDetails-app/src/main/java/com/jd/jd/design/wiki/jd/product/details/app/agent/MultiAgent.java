
package com.jd.jd.design.wiki.jd.product.details.app.agent;

import com.jd.framework.ai.agent.Agent;
import com.jd.framework.ai.agent.client.AgentMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import static com.jd.jd.design.wiki.jd.product.details.app.config.MultiAgentConfiguration.*;

@Service
public class MultiAgent {

    @Autowired
    @Qualifier(REACT_AGENT)
    private Agent reactAgent;

    @Autowired
    @Qualifier(PARALLEL_AGENT)
    private Agent parallelAgent;

    @Autowired
    @Qualifier(ROUTING_AGENT)
    private Agent routingAgent;

    @Autowired
    @Qualifier(SEQUENTIAL_AGENT)
    private Agent sequentialAgent;


    public Flux<AgentMessage> reactAgentStream(String input) {
        return reactAgent
//                .chatId("default") // 传入chatID，自动组装对话记忆
                .message(input)
                .stream()
                .response();
    }

    public Flux<AgentMessage> parallelAgentStream(String input) {
        return parallelAgent
                .message(input)
                .stream()
                .response();
    }

    public Flux<AgentMessage> routingAgentStream(String input) {
        return routingAgent
                .message(input)
                .stream()
                .response();
    }

    public Flux<AgentMessage> sequentialAgentStream(String input) {
        return sequentialAgent
                .message(input)
                .stream()
                .response();
    }

}

