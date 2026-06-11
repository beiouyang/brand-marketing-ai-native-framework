package com.jd.jd.design.wiki.jd.product.details.web.controller;

import com.alibaba.fastjson.JSON;
import com.jd.jd.design.wiki.jd.product.details.client.order.api.OrderService;
import com.jd.jd.design.wiki.jd.product.details.client.order.param.OrderParam;
import com.jd.jd.design.wiki.jd.product.details.web.vo.OrderVO;
import com.jd.jd.design.wiki.jd.product.details.web.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.jd.framework.boot.doc.annotation.Api;
import com.jd.framework.boot.doc.annotation.ApiOperation;
import com.jd.framework.boot.doc.annotation.ApiParam;

/**
 * Description: Web Demo
 *
 * @author DongBoot
 */

@Controller
@Api(value = "脚手架服务API", description = "测试脚手架组件服务")
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @RequestMapping("/hello")
    @ApiOperation(value = "测试程序服务是否正常启动")
    @ResponseBody
    public String hello(@RequestParam(name = "name", defaultValue = "demo") String name) {
        return "hello " + name;
    }








}
