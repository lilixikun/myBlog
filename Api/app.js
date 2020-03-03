const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

const { InitManager } = require('./core/init')

InitManager.initCore(app)

app.use(bodyParser())


app.listen('3000')