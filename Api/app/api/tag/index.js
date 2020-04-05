const Router = require("koa-router");
const router = new Router({
    prefix: '/api/tag'
})

const TagVal = require('../../validators/tag')

const TagController = require('../../controllers/tag')

const { Success, ParameterExceptio } = require('../../../core/httpException')

router.get('/findAll', async (ctx, next) => {

    const data = await TagController.findAll()

    throw new Success(data)
})

router.post('/create', async (ctx) => {
    await new TagVal().validate(ctx)

    await TagController.create(ctx.request.body)

    throw new Success()
})



router.delete('/del/:uid', async (ctx) => {
    if (!ctx.params.uid) {
        throw new ParameterExceptio('uid必填!')
    }
    await TagController.delete(ctx.params.uid)

    throw new Success()
})



module.exports = router