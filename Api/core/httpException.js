/*
 * @Author: kun.xi 
 * @Date: 2020-03-04 18:32:23 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-04-16 17:21:13
 */
/**
 * HttpException 是本项目所有其他异常的基类
 */
class HttpException extends Error {

    constructor(msg = '服务器异常', errorCode = 500, code = 400) {
        super()
        /**
         * 错误信息
         */
        this.msg = msg
        /**
         * Http 状态码
         */
        this.code = code
        /**
         * 自定义的异常状态码
         */
        this.errorCode = errorCode

    }
}


class ParameterException extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 400;
        this.msg = msg || '参数错误';
        this.errorCode = errorCode || 400;
    }
}

class AuthFaild extends HttpException {
    constructor(msg) {
        super()
        this.code = 401;
        this.msg = msg || '认证失败';
        this.errorCode = 401;
    }
}

class ForBiden extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 403
        this.msg = msg || '禁止访问'
        this.errorCode = errorCode || 1006
    }
}
class Success extends HttpException {
    constructor(data, errorCode) {
        super()
        this.code = 200;
        this.data = data;
        this.msg = '成功';
        this.errorCode = errorCode || 200;
    }
}


class Faild extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 400;
        this.msg = msg || '操作失败';
        this.errorCode = errorCode || -200;
    }
}


class NotFound extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 404
        this.msg = msg || '资源未找到'
        this.errorCode = errorCode || 10000
    }
}

module.exports = {
    HttpException,
    ParameterException,
    ForBiden,
    AuthFaild,
    Success,
    Faild,
    NotFound
}