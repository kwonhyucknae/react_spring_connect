package com.naver.fin.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @RequestMapping("/api/zz")
    public String test() {
        return "zz";
    }
}

