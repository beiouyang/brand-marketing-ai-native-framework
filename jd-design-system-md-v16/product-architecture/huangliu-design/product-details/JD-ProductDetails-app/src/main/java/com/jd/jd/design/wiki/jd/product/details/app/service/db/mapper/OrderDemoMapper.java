
package com.jd.jd.design.wiki.jd.product.details.app.service.db.mapper;


import com.jd.jd.design.wiki.jd.product.details.client.order.dto.OrderDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

/**
 * Description: Demo
 *
 * @author DongBoot
 * @see <a href="https://mybatis.org/spring-boot-starter/">Mybatis 使用说明</a>
 */
@Mapper
public interface OrderDemoMapper {

    @Select("SELECT * FROM `order` WHERE id = #{id}")
    OrderDTO getById(String id);

}
