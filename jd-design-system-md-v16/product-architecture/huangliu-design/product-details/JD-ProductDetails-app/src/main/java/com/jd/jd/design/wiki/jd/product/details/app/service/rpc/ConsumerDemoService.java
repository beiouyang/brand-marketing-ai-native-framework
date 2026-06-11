
package com.jd.jd.design.wiki.jd.product.details.app.service.rpc;


import com.jd.framework.boot.runtime.api.annotation.BootReference;
import com.jd.framework.boot.runtime.api.annotation.BootReferenceBinding;
import com.jd.jd.design.wiki.jd.product.details.client.order.api.OrderService;
import org.springframework.stereotype.Service;

@Service
public class ConsumerDemoService {
    /**
     * 远程调用，声明consumer
     */
    @BootReference(uniqueId = "jsfDemoConsumer", binding = @BootReferenceBinding(alias = "${dong.jsf.demo.alias}", bindingType = "jsf"))
    private OrderService jsfDemoConsumer;

}

