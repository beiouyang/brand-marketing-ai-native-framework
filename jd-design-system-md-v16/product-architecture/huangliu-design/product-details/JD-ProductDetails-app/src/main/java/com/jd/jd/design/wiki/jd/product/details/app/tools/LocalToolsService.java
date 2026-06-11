
package com.jd.jd.design.wiki.jd.product.details.app.tools;

import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;
import org.springframework.stereotype.Service;

@Service
public class LocalToolsService {

    @Tool(name = "tools_weather", description = "仅当用户明确需要天气情况的时候调用此工具。" +
                    "必须参数： " +
                    "   city：城市的名称")
    public String getWeather(@ToolParam(description = "城市") String city) {
        return "晴";
    }

}

