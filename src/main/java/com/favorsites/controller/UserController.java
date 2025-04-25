package com.favorsites.controller;

import com.favorsites.domain.UserInfo;
import com.favorsites.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 用户信息接口类
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/queryById/{userId}")
    public UserInfo queryById(@PathVariable("userId") String userId) {
        if (StringUtils.hasText(userId)) {
            return userService.queryById(userId);
        }
        return new UserInfo();
    }
}
