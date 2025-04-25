import http from '@/utils/http-common.js'

export function queryUserData(userId) {
    return http.get('/user/queryById/' + userId);
}