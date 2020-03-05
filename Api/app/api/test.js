const Router = require("koa-router");

const router = new Router()
const Test = require('../validators/test')

router.get('/test', async (ctx, next) => {
    const res = await new Test().validate(ctx)
    console.log(res);

    ctx.body = "test"
})

module.exports = router