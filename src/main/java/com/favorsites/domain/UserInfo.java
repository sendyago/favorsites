package com.favorsites.domain;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 用户信息
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("user_info")
public class UserInfo {
    /**
     * 用户ID
     */
    @TableId("user_id")
    private String userId;
    /**
     * 用户名称
     */
    private String userName;
    /**
     * 电子邮件（用户登录）
     */
    private String email;
    /**
     * 用户头像url
     */
    private String headImgUrl;
    /**
     * 搜索引擎类型
     */
    private String searchType;
    /**
     * 语言类型
     */
    private String localType;
    /**
     * 主题类型
     */
    private String themeType;
    /**
     * 用户注册日期
     */
    private Long regDate;

}
