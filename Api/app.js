const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors');
const app = new Koa()

const { InitManager } = require('./core/init')
//拦截错误中间件在最前面
const catchError = require('./middlewares/exception')

app.use(catchError)
// 处理跨域
app.use(cors())
app.use(bodyParser())
InitManager.initCore(app)


app.on('error', (err, ctx) => {
    console.log(err);
});
app.listen('7001')