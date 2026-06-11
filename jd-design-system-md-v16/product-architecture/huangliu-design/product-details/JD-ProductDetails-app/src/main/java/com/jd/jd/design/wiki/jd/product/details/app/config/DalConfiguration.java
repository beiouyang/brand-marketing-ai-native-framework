
package com.jd.jd.design.wiki.jd.product.details.app.config;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.mybatis.spring.annotation.MapperScans;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import javax.sql.DataSource;

/**
 * Description: Dal Demo
 *
 * @author DongBoot
 * @see <a href="https://mybatis.org/spring-boot-starter/">Mybatis 使用说明</a>
 * @see <a href="https://joyspace.jd.com/pages/om3n1qZjOTSVGzCqBPJZ">DongDAL 使用说明</a>
 */
@Configuration
@MapperScans(value = {
        @MapperScan(basePackages = {"com.jd.jd.design.wiki.jd.product.details.app.service.db.mapper"}, sqlSessionFactoryRef = "sqlSessionFactory", sqlSessionTemplateRef = "sqlSessionTemplate")
})
public class DalConfiguration {

    @Bean
    public SqlSessionFactory sqlSessionFactory(@Qualifier("dp1") DataSource dataSource) throws Exception {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(dataSource);
        return sqlSessionFactoryBean.getObject();
    }


    @Bean
    public DataSourceTransactionManager masterTransactionManager(@Qualifier("dp1") DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }

    @Bean
    public SqlSessionTemplate sqlSessionTemplate(@Qualifier("sqlSessionFactory") SqlSessionFactory sqlSessionFactory) {
        return new SqlSessionTemplate(sqlSessionFactory);
    }

}

