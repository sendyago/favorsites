package com.favorsites.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.favorsites.dao.UserMapper;
import com.favorsites.domain.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 用户信息服务类
 */
@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    public UserInfo queryById(String userId) {
        return userMapper.selectById(userId);
//        return userMapper.selectOne(new QueryWrapper<UserInfo>().eq("user_id", userId));
    }
}
