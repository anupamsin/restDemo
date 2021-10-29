package com.cybage.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {
    @GetMapping("/sayHi")
    public String sayHello(){
        return "<h1>Hello</h1>";
    }
}
