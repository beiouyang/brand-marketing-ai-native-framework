
package com.jd.jd.design.wiki.jd.product.details.app.config;

import com.jd.framework.boot.runtime.api.annotation.BootReference;
import com.jd.ssa.client.interceptor.ErpSsoInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import com.jd.framework.boot.runtime.api.annotation.BootReferenceBinding;
import com.jd.ssa.service.SsoSessionExportService;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.core.env.Environment;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


/**
* Description: SSO Demo
*
* @author DongBoot
* @see <a href="https://joyspace.jd.com/pages/zSovxYW4CUVXpZh3q8dE">SSO SDK 接入文档</a>
*/

@Configuration
@ConditionalOnExpression("${dong.sso.enabled:false}")
public class SsoConfiguration implements WebMvcConfigurer {

    @Autowired
    private Environment env;

    @BootReference(binding = @BootReferenceBinding(alias = "BJ", bindingType = "jsf",timeout = 10000))
    private SsoSessionExportService ssoSessionExportService;

    /**
    * 定义拦截器Bean
    *
    * @return ErpSsoInterceptor
    */
    @Bean
    public ErpSsoInterceptor erpSsoInterceptor() throws Exception {
        ErpSsoInterceptor interceptor = new ErpSsoInterceptor();
        interceptor.setConfigFileName("/profile/sso.properties");
        interceptor.setSsoSessionExportService(ssoSessionExportService);
        return interceptor;
    }

    /**
    * 注册拦截器
    *
    * @param registry
    */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        try {
            ErpSsoInterceptor erpSsoInterceptor = erpSsoInterceptor();
                registry.addInterceptor(erpSsoInterceptor).addPathPatterns("/**");
        } catch (Exception e) {
                throw new RuntimeException(e);
        }
    }
}
