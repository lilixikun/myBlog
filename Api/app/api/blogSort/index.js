const Router = require("koa-router");
const router = new Router({
    prefix: '/api/blogSort'
})

const BlogSortVal = require('../../validators/blogSort')

const blogSortController = require('../../controllers/blogSort')

const { Success, ParameterException } = require('../../../core/httpException')

router.get('/findAll', async (ctx, next) => {

    const data = await blogSortController.findAll()

    throw new Success(data)
})

router.post('/create', async (ctx) => {
    await new BlogSortVal().validate(ctx)

    await blogSortController.create(ctx.request.body)

    throw new Success()
})



router.delete('/del/:uid', async (ctx) => {
    const { uid } = ctx.params
    if (!uid) {
        throw new ParameterException('uid必填!')
    }
    await blogSortController.delete(uid)

    throw new Success()
})



module.exports = router