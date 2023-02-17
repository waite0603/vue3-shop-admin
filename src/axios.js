import { ElNotification } from 'element-plus'
import { useCookies } from '@vueuse/integrations/useCookies';
import axios from 'axios';

// 创建axios实例
const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const cookies = useCookies();
    const token = cookies.get('admin-token');

    if (token) {
        config.headers['token'] = token;
    }

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data.data;
}, function (error) {
    // 对响应错误做点什么
    ElNotification({
        message: error.response.data.msg || '登录失败',
        type: 'error',
        duration: 1500
      })
});

export default instance;

