package com.citi.collaborative.contoller;

import com.citi.collaborative.common.Ops;
import com.citi.collaborative.common.ResponseMessage;
import com.citi.collaborative.domain.Org;
import com.citi.collaborative.service.OrgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("org")
public class OrgController {

    @Autowired
    private OrgService orgService;

    @GetMapping("list/{name}")
    public ResponseMessage<Org> list(@PathVariable String name) {
        Ops<Org> ops = Ops.<Org>builder()
                .name("name")
                .val(name)
                .build();
        return ResponseMessage.success(orgService.findAll(ops, Org.class));
    }

    @PostMapping("add")
    public ResponseMessage<Void> add(@RequestBody Org org) {
        return ResponseMessage.success(orgService.saveMany(org));
    }

    @GetMapping("recommend/{keyWord}")
    public ResponseMessage<Org> recommend(@PathVariable String keyWord) {
        return ResponseMessage.success(orgService.recommend(keyWord));
    }

    @GetMapping("list")
    public ResponseMessage<Org> all() {
        return ResponseMessage.success(orgService.findAll(Org.class));
    }
}