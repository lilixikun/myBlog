const Router = require('koa-router')

const { generateToken } = require('../../lib/utils')
const { LoginType } = require('../../lib/enum')
const UserController = require('../../controllers/user')
const { ParameterException, Success, ForBiden } = require('../../../core/httpException')
const { Auth } = require('../../services/auth')

const router = new Router({
    prefix: '/token'
})

router.post('/verifyToken', async (ctx) => {
    const { token } = ctx.request.body;
    if (!token) {
        throw new ParameterException('token 不允许为空!')
    }
    await Auth.verifyToken(token)

    throw new Success(token)
})

router.post('/refreshToken', async (ctx) => {
    const { uid } = ctx.request.body;
    if (!uid) {
        throw new ParameterException('token 不允许为空!')
    }

    await UserController.findByUid(uid)

    token = await generateToken(uid, Auth.USER)

    throw new Success(token)
})

module.exports = router