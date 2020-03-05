const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
var router = require('koa-router')();

const { InitManager } = require('./core/init')
//拦截错误中间件在最前面
const catchError = require('./middlewares/exception')

app.use(catchError)

InitManager.initCore(app)

app.use(bodyParser())

app.on('error', (err, ctx) => {
    console.log(err);
});

console.log(process.env.NODE_ENV);


app.listen('7000')