import Axios from 'axios';
const axios = Axios.create();
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.common['token'] = localStorage.getItem('token');
axios.defaults.headers.common['loginUserId'] = localStorage.getItem('loginUserId');
axios.interceptors.request.use((config) => {
    // if (config.method === 'post') {
    //     config.data = qs.stringify(config.data);
    // }
    return config;
});
// Add a response interceptor
axios.interceptors.response.use(
    (response) => {
        // Do something with response data
        return response.data;
    },
    (error) => {
        // Do something with response error
        return Promise.reject(error);
    }
);
export default axios;
