const Router = require("koa-router");
const router = new Router({
    prefix: '/api/blog'
})

const BlogVal = require('../../validators/blog')
const { Auth } = require('../../services/auth')
const Blog = require('../../models/bolg')
const blogController = require('../../controllers/blog')

const { Success, ParameterException } = require('../../../core/httpException')

router.get('/findAndCountAll', async (ctx, next) => {

    const { page, pageSize } = ctx.request.query
    const data = await blogController.findAndCountAll(page, pageSize)

    throw new Success(data)
})

router.get('/findByTag', async (ctx, next) => {

    const { page, pageSize, tagUid } = ctx.request.query

    const data = await blogController.findByTag(page, pageSize, tagUid)

    throw new Success(data)
})


router.get('/findHotBlog', async () => {

    const data = await Blog.findHotBlog()

    throw new Success(data)
})

router.get('/orderByTime', async () => {

    const data = await Blog.orderByTime()

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