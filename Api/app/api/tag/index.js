const Router = require("koa-router");
const router = new Router({
    prefix: '/api/tag'
})

const TagVal = require('../../validators/tag')
const Tag = require('../../models/tag')
const TagController = require('../../controllers/tag')

const { Success, ParameterException } = require('../../../core/httpException')

router.get('/findAll', async (ctx) => {

    const data = await Tag.findAll()

    throw new Success(data)
})

router.get('/findByUid/:uid', async (ctx) => {

    const { uid } = ctx.params
    if (!uid) {
        throw new ParameterException('uid必填!')
    }
    const data = await Tag.findByUid(uid)

    throw new Success(data)
})


router.get('/findHotTag', async (ctx) => {

    const data = await Tag.findHotTag()

    throw new Success(data)
})


router.get('/findAndCountAll', async (ctx, next) => {

    const { page, pageSize } = ctx.request.query
    const data = await TagController.findAndCountAll(page, pageSize)

    throw new Success(data)
})

router.post('/create', async (ctx) => {
    await new TagVal().validate(ctx)

    await TagController.create(ctx.request.body)

    throw new Success()
})



router.delete('/del/:uid', async (ctx) => {

    const { uid } = ctx.params

    if (!uid) {
        throw new ParameterException('uid必填!')
    }
    await TagController.delete(uid)

    throw new Success()
})



module.exports = router