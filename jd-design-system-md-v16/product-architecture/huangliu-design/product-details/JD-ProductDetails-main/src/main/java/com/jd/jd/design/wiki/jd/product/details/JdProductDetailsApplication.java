package com.jd.jd.design.wiki.jd.product.details;

import com.jd.framework.boot.autoconfigure.DongBootApplication;
import com.jd.framework.boot.core.DongApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;

@DongBootApplication
@PropertySources(@PropertySource(value = { "classpath:/profile/dongdal.properties", "classpath:/profile/jsf.properties", "classpath:/profile/jimdb.properties", "classpath:/profile/ducc.properties", "classpath:/profile/sso.properties", "classpath:/profile/ai.properties" }, ignoreResourceNotFound = true))
public class JdProductDetailsApplication {

    public static void main(String[] args) {
        DongApplication.run(JdProductDetailsApplication.class, args);
    }

}
