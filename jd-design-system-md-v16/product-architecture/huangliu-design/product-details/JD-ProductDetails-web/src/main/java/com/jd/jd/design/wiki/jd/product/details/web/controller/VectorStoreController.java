
package com.jd.jd.design.wiki.jd.product.details.web.controller;

import com.jd.framework.boot.doc.annotation.Api;
import com.jd.jd.design.wiki.jd.product.details.web.vo.Result;
import org.springframework.ai.document.Document;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

/**
 * Description: Web Demo
 *
 * @author DongBoot
 */

@Controller
@Api(value = "脚手架向量存储api", description = "脚手架向量存储api")
@RequestMapping("/vectorStore")
public class VectorStoreController {

    @Autowired
    private VectorStore vectorStore;

    @RequestMapping("/add")
    @ResponseBody
    public Result<String> add(@RequestParam(name = "document",defaultValue = "北京天气是阴的") String document) {
        try {
            List<Document> documents = List.of(
                    new Document(document, Map.of("source", "input"))
            );
            // **关键步骤：add 方法自动执行嵌入和存储**
            vectorStore.add(documents);
            return new Result<>("aa");
        } catch (Exception e) {
            return new Result<>(e.getMessage());
        }
    }
    @RequestMapping("/search")
    @ResponseBody
    public Result<List<Document>> search(@RequestParam(name = "query",defaultValue = "测试document") String document) {
        try {
            // **关键步骤：add 方法自动执行嵌入和存储**
            List<Document> list = vectorStore.similaritySearch(document);
            return new Result<>(list);
        } catch (Exception e) {
            return new Result(e.getMessage());
        }
    }

}
