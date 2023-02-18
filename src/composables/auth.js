import { useCookies } from "@vueuse/integrations/useCookies";

const TokenKey = "admin-token";
const cookies = useCookies();

// 获取token
export function getToken() {
    return cookies.get(TokenKey);
}

// 设置token
export function setToken(token) {
    // token 有效期为 60 分钟
    const expires = new Date(Date.now() + 60 * 60 * 1000);
    cookies.set(TokenKey, token, { expires });
}

// 移除token
export function removeToken() {
    return cookies.remove(TokenKey);
}