/*
 * @Author: kun.xi 
 * @Date: 2020-03-04 18:32:23 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-03-04 20:30:39
 */

class HttpException extends Error {
    /**
     * 
     * @param {*} msg 错误信息
     * @param {*} errorCode 业务状态码
     * @param {*} code 响应头状态码
     */
    constructor(msg = '服务器异常', errorCode = 500, code = 400) {
        super()
        this.msg = msg
        this.errorCode = errorCode
        this.code = code
    }
}

class NotFound extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.msg = msg || '资源未找到'
        this.errorCode = errorCode || 10000
        this.code = this.code || 404
    }
}

module.exports = {
    HttpException,
    NotFound
}