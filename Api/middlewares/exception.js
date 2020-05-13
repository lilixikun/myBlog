/*
 * @Author: kun.xi 
 * @Date: 2020-03-04 20:21:22 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-05-13 11:16:28
 */
const { HttpException } = require("../core/httpException")
const logUtil = require('./log4Util')

const catchError = async (ctx, next) => {
    const start = new Date();
    let ms = new Date() - start;
    logUtil.reqLog(ctx, ms);
    try {
        await next()
        // 记录请求日志
        ms = new Date() - start;
        logUtil.reqLog(ctx, ms);
    } catch (error) {
        const isHttpException = error instanceof HttpException

        // 开发环境下输出 异常 error
        if (process.env.NODE_ENV === 'dev' && !isHttpException) {
            throw error
        }

        //判断是否是已知错误
        if (isHttpException) {
            if (error.code === 200) {
                ctx.body = {
                    code: error.code,
                    data: error.data
                }
            } else {
                ctx.body = {
                    msg: error.msg,
                    errorCode: error.errorCode,
                    request: `${ctx.method} ${ctx.path}`
                }
            }
            ctx.status = error.code

            // 记录返回信息
            ms = new Date() - start;
            logUtil.logResponse(ctx, ms);
        } else {
            ctx.body = {
                msg: '服务器出现了未知异常',
                errorCode: 999,
                request: `${ctx.method} ${ctx.path}`
            }

            ctx.status = 500
            // 记录异常日志
            ms = new Date() - start;
            logUtil.logError(ctx, error, ms);
        }
    }
}

module.exports = catchError