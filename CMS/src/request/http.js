import axios from 'axios';
import QS from 'qs';
import { message } from 'antd';
import store from 'good-storage'
import redux from '../store'
import { logOut } from '../store/user/actions'
// 环境的切换
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://localhost:7001/api';
} else if (process.env.NODE_ENV === 'debug') {
    axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://api.123dailu.com/';
}

// 创建axios实例
var instance = axios.create({ timeout: 1000 * 12 });
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



// 请求拦截器
instance.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = store.get("token");
        token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.error(error);
    })

// 响应拦截器
instance.interceptors.response.use(
    // 请求成功
    res => {
        if (res.status === 200) {
            const { data } = res
            if (data.code === 200) {
                return Promise.resolve(data)
            }
        } else {
            return Promise.reject(res)
        }
    },
    // 服务器状态码不是200的情况    
    error => {
        console.log(error);

        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录                
                // 未登录则跳转登录页面，并携带当前页面的路径                
                // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                case 401:
                case 403:
                    redux.dispatch(logOut())
                    break;
                // 404请求不存在                
                case 404:
                    break;
                // 其他错误，直接抛出错误提示                
                default:
                    message.error(error.response.data.msg)
            }
            return Promise.reject(error.response);
        }
    }
);
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
    console.log(url);

    return new Promise((resolve, reject) => {
        instance.get(url, { params: params })
            .then(res => resolve(res))
            .catch(err => reject(err.data))
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        instance.post(url, QS.stringify(params))
            .then(res => resolve(res))
            .catch(err => reject(err.data))
    });
}

/**
 * del方法 对应delete请求 
 * @param {*} url [请求的url地址]
 * @param {*} params [请求时携带的参数] 
 */
export function del(url, params) {
    return new Promise((resolve, reject) => {
        instance.delete(url, params)
            .then(res => resolve(res))
            .catch(err => reject(err.data))
    });
}