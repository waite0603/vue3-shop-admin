import axios from '~/axios';

// 通过 export 导出
export const login = (username, password) => {
    return axios.post('/admin/login', {
        username,
        password
    });
};