const Router = require("koa-router");
const router = new Router({
    prefix: '/api/blogSort'
})

const BlogSortVal = require('../../validators/blogSort')

const blogSortController = require('../../controllers/blogSort')

const { Success, ParameterExceptio } = require('../../../core/httpException')

router.get('/findAll', async (ctx, next) => {

    const data = await blogSortController.findAll()

    throw new Success(data)
})

router.post('/create', async (ctx) => {
    await new BlogSortVal().validate(ctx)

    blogSortController.create(ctx.request.body)

    throw new Success()
})



router.delete('/del/:uid', async (ctx) => {
    if (!ctx.params.uid) {
        throw new ParameterExceptio('uid必填!')
    }
    await blogSortController.delete(ctx.params.uid)

    throw new Success()
})



module.exports = router