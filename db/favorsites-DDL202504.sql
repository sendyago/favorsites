DROP TABLE IF EXISTS user_info;
CREATE TABLE user_info(
    `user_id` VARCHAR(30) NOT NULL  COMMENT '用户ID' ,
    `user_name` VARCHAR(32) NOT NULL  COMMENT '用户名称' ,
    `email` VARCHAR(64) NOT NULL  COMMENT '电子邮件' ,
    `head_img_url` VARCHAR(512)   COMMENT '用户头像url地址' ,
    `search_type` VARCHAR(2)   COMMENT '搜索引擎类型' ,
    `local_type` VARCHAR(1)   COMMENT '语言类型' ,
    `theme_type` VARCHAR(1)   COMMENT '主题类型' ,
    `reg_date` BIGINT NOT NULL  COMMENT '用户注册日期' ,
    PRIMARY KEY (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT = '用户信息表';

