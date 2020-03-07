const Router = require("koa-router");

const router = new Router()
const Test = require('../validators/test')

const testController = require('../controllers/test')

router.get('/test/:id', async (ctx, next) => {

    const data = await testController.find(ctx.params.id)

    ctx.body = data
})

router.post('/test', async (ctx, next) => {
    const res = await new Test().validate(ctx)
    const data = await testController.add(ctx.request.body)
})

router.post('/testupdate', async (ctx, next) => {
    //const res = await new Test().validate(ctx)
    const data = await testController.update(ctx.request.body)
    ctx.body = data
})

router.delete('/test/:id', async (ctx, next) => {
    const data = await testController.dele(ctx.params.id)
    ctx.body = data
})

module.exports = router