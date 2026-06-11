
package com.jd.jd.design.wiki.jd.product.details.app.mcp;


import io.modelcontextprotocol.client.transport.HttpClientSseClientTransport;
import io.modelcontextprotocol.spec.McpClientTransport;
import org.springframework.ai.mcp.client.common.autoconfigure.NamedClientMcpTransport;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class McpConfig {

    @Bean
    public static List<NamedClientMcpTransport> jsfMcpClientTransport(JsfClientProperties jsfClientProperties) {
        List<NamedClientMcpTransport> transports = new ArrayList<>();
        String jdosEnv = System.getenv("JDOS_ENV");
        String jsfBaseUrl = "http://dongmcp.jdtest.local/mcp";
        if (jdosEnv != null && (jdosEnv.equals("pro") || jdosEnv.equals("pre"))) {
            jsfBaseUrl = "http://dongmcp.jd.com/mcp";
        }
        for (JsfClientProperties.JsfConfig jsfConfig : jsfClientProperties.getConfig()) {
            McpClientTransport transport = HttpClientSseClientTransport
                    .builder(jsfBaseUrl + "/" + jsfConfig.getInterfaceName() + "/")
                    .sseEndpoint("sse?appName=" + jsfConfig.getAppName())
                    .build();
            transports.add(new NamedClientMcpTransport("", transport));
        }

        return transports;
    }
}

