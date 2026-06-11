

package com.jd.jd.design.wiki.jd.product.details.app.config;

import com.jd.framework.boot.jim.ConfigurableJimCluster;
import com.jd.framework.boot.jim.spring.JimClusterBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class JimConfiguration {
    @Bean
    @ConfigurationProperties(prefix = "dong.jim.jim1")
    public ConfigurableJimCluster jim1() {
        return JimClusterBuilder.create().build();
    }

}


