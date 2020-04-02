const Router = require("koa-router");

const router = new Router({
    prefix:'/blogSort'
})

const blogSortController = require('../../controllers/blogSort')

router.get('/findAll', async (ctx, next) => {

    const data = await blogSortController.findAll()

    ctx.body = data
})


module.exports = router