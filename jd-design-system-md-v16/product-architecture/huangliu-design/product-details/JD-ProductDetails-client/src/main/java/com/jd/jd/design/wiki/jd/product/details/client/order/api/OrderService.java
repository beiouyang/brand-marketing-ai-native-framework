package com.jd.jd.design.wiki.jd.product.details.client.order.api;

import com.jd.jd.design.wiki.jd.product.details.client.order.param.OrderParam;
import com.jd.jd.design.wiki.jd.product.details.client.order.dto.OrderDTO;

/**
 * Description: JSF Demo
 *
 * @author DongBoot
 * @date 2024-11-29
 */
public interface OrderService {


    OrderDTO getFromDb(OrderParam param);







}
