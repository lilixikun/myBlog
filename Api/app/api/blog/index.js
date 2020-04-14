const Router = require("koa-router");
const router = new Router({
    prefix: '/api/blog'
})

const BlogVal = require('../../validators/blog')

const blogController = require('../../controllers/blog')

const { Success, ParameterExceptio } = require('../../../core/httpException')

router.get('/findAll', async (ctx, next) => {

    const data = await blogController.findAll()

    throw new Success(data)
})

router.get('/findByUid/:uid', async (ctx, next) => {
    if (!ctx.params.uid) {
        throw new ParameterExceptio('uid必填!')
    }
    const data = await blogController.findByUid(ctx.params.uid)

    throw new Success(data)
})

router.post('/create', async (ctx) => {
    await new BlogVal().validate(ctx)

    await blogController.create(ctx.request.body)

    throw new Success()
})

router.delete('/del/:uid', async (ctx) => {
    if (!ctx.params.uid) {
        throw new ParameterExceptio('uid必填!')
    }
    await blogController.delete(ctx.params.uid)

    throw new Success()
})

module.exports = router