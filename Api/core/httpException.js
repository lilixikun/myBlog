/*
 * @Author: kun.xi 
 * @Date: 2020-03-04 18:32:23 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-03-05 11:43:59
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
         * 特点业务状态码
         */
        this.errorCode = errorCode
       
    }
}


class Success extends HttpException {
    constructor(ex) {
        super()
        this.code = 200;
        this.msg = '成功';
        this.errorCode = 0;
        if (ex && ex.code) {
            assert_1.default(lodash_1.isInteger(ex.code));
            this.code = ex.code;
        }
        if (ex && ex.msg) {
            this.msg = ex.msg;
        }
        if (ex && ex.errorCode) {
            assert_1.default(lodash_1.isInteger(ex.errorCode));
            this.errorCode = ex.errorCode;
        }
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