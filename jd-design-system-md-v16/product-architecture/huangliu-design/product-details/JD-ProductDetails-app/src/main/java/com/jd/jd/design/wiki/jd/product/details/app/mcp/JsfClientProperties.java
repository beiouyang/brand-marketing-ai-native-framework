
package com.jd.jd.design.wiki.jd.product.details.app.mcp;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Data
@Configuration
@ConfigurationProperties(prefix = "dong.spring.ai.mcp.client.jsf")
public class JsfClientProperties {

    private List<JsfConfig> config = new ArrayList<>();

    @Data
    public static class JsfConfig {
        private String interfaceName;

        private String appName;
    }
}

