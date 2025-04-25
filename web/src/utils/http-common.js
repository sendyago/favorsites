import axios from "axios";
// 跨域请求，设置为true表示浏览器端请求后端时会携带凭证
axios.defaults.withCredentials = true

export default axios.create({
    baseURL: process.env.BASE_API,
    timeout: 60000, // 60秒
    headers: {
        "Content-type": "application/json;character=utf-8"
    }
});