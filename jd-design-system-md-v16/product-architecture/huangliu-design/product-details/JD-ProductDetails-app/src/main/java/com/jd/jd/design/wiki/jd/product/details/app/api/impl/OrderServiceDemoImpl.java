
package com.jd.jd.design.wiki.jd.product.details.app.api.impl;
import com.jd.jd.design.wiki.jd.product.details.client.order.param.OrderParam;
import com.jd.jd.design.wiki.jd.product.details.app.service.db.mapper.OrderDemoMapper;
import com.jd.jd.design.wiki.jd.product.details.client.order.api.OrderService;
import com.jd.jd.design.wiki.jd.product.details.client.order.dto.OrderDTO;
import com.jd.framework.boot.doc.annotation.Api;
import com.jd.framework.boot.runtime.api.annotation.BootService;
import com.jd.framework.boot.runtime.api.annotation.BootServiceBinding;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@BootService(bindings = {
        @BootServiceBinding(alias = "${dong.jsf.demo.alias}", server = {"server1"}, bindingType = "jsf")
})
@Api(value = "订单服务", description = "可根据订单详情信息")
public class OrderServiceDemoImpl implements OrderService {

    @Autowired
    private OrderDemoMapper orderMapper;

    public OrderDTO getFromDb(OrderParam param) {
        return orderMapper.getById(param.getId());
    }

}

