export function getCookie(key) {
    if (key != null && key != '') {
        let cookie = document.cookie;
        if (cookie != null && cookie != '') {
            // a=1 b=2 c=3
            // a=1; b=2; c=3
            let cookieArr = cookie.split("; ")
            for (let i = 0; i < cookieArr.length; i++) {
                if (cookieArr[i] != null && cookieArr[i] != '') {
                    let keyArr = cookieArr[i].split("=")
                    if (keyArr.length > 1 && keyArr[0] == key) {
                        // 编码：encodeURI，解码：decodeURI
                        return decodeURI(keyArr[1])
                    }
                }
            }
        }
    }
    return "" 
}

const domain = process.env.NODE_ENV == 'development' ? "localhost" : "favorsites.com" ;
export function setCookie(key, val) {
    document.cookie = key + "=" + encodeURI(val) + "; domain=" + domain + "; expires=" + getExpiresDate().toUTCString()
}

export function delCookie(key) {
    const d = new Date(-1)
    document.cookie = key + "= ; domain=" + domain + "; expires=" + d.toUTCString()
}

function getExpiresDate() {
    let d = new Date()
    let year = d.getFullYear() + 10
    d.setFullYear(year)
    return d
}