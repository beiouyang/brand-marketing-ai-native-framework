
package com.jd.jd.design.wiki.jd.product.details.app.service.ducc;

import com.jd.laf.config.spring.annotation.LafValue;
import org.springframework.stereotype.Service;

@Service
public class DuccDemoService {

    @LafValue("dongboot.ducc.test")
    private String message;

    public String getMessage() {
        return message;
    }
}

