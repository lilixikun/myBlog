/*
 * @Author: kun.xi 
 * @Date: 2020-03-04 20:21:22 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-03-04 20:47:11
 */
const { HttpException } = require("../core/httpException")

const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        const isHttpException = error instanceof HttpException

        // 开发环境下输出 异常 error
        if (process.env.NODE_ENV === 'dev' && !isHttpException) {
            throw error
        }
        //判断是否是已知错误
        if (isHttpException) {
            ctx.body = {
                msg: error.msg,
                errorCode: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        } else {
            ctx.body = {
                msg: '服务器出现了未知异常',
                errorCode: 999,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = 500
        }
    }
}

module.exports = catchError