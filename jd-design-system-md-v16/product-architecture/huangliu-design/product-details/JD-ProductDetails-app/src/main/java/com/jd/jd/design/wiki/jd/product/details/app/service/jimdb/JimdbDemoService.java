
package com.jd.jd.design.wiki.jd.product.details.app.service.jimdb;

import com.jd.jim.cli.Cluster;

import javax.annotation.Resource;

public class JimdbDemoService {
    @Resource
    private Cluster jim1;


    public String getByIdFromCache(String orderId) {
        String demoValue = "demo value";
        jim1.set(orderId + "_1", demoValue + "_1");
        String value = String.format("%s:%s, %s:%s",
                orderId,
                orderId + "_1",
                jim1.get(orderId + "_1"),
                orderId + "_2");

        return value;
    }
}

