const Router = require("koa-router");
const router = new Router({
    prefix: '/api/blog'
})

const BlogVal = require('../../validators/blog')
const { Auth } = require('../../services/auth')
const blogController = require('../../controllers/blog')

const { Success, ParameterException } = require('../../../core/httpException')

router.get('/findAndCountAll', new Auth().m, async (ctx, next) => {

    setTimeout(() => {

    }, 5000);
    const { page, pageSize } = ctx.request.query
    const data = await blogController.findAndCountAll(page, pageSize)

    throw new Success(data)
})



router.get('/findByUid/:uid', async (ctx, next) => {
    const { uid } = ctx.params
    if (!uid) {
        throw new ParameterException('uid必填!')
    }
    const data = await blogController.findByUid(uid)

    throw new Success(data)
})

router.post('/create', async (ctx) => {

    await new BlogVal().validate(ctx)

    await blogController.create(ctx.request.body)

    throw new Success()
})

router.delete('/del/:uid', async (ctx) => {
    const { uid } = ctx.params
    if (!uid) {
        throw new ParameterException('uid必填!')
    }
    await blogController.delete(uid)

    throw new Success()
})

module.exports = router