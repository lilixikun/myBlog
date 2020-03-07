const Koa = require('koa');
const { HttpException } = require('./core/httpException')
const app = new Koa();

const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        const isHttpException = error instanceof HttpException

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

app.use(catchError)

app.use((ctx, next) => {
    throw new httpException()
});

app.onerror = (err) => {
    console.log('捕获到了!', err.message);
}

app.listen(8000);