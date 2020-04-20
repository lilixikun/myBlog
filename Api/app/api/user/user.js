const Router = require('koa-router')

const { generateToken } = require('../../lib/utils')
const { LoginType } = require('../../lib/enum')
const User = require('../../models/user')
const { oauthPath } = require('../../../config').github
const UserController = require('../../controllers/user')
const { ParameterException, Success } = require('../../../core/httpException')
const UserVal = require('../../validators/user')
const { Auth } = require('../../services/auth')
const GitHub = require('../../services/github')
const router = new Router({
    prefix: '/api/user'
})

router.post('/login', async (ctx) => {

    const { type, userName, password, email } = ctx.request.body;

    let token, user
    switch (Number(type)) {
        // 账户密码登录
        case LoginType.ADMIN_NAME:
        case LoginType.USER_NAME:
            await new UserVal().validate(ctx)
            // 验证账户是否存在
            user = await User.verifyUserNamePassword(userName, password)
            // 生成token
            token = generateToken(user.uid, Auth.USER)
            break
        // 邮箱登录
        case LoginType.USER_EMAIL:
        case LoginType.ADMIN_EMAIL:
            await new UserVal().validate(ctx)
            // 验证邮箱是否存在
            user = await User.verifyEmailPassword(email, password)
            // 生成token
            token = await generateToken(user.uid, Auth.USER)
            break;

        // 微信扫码登录    
        case LoginType.USER_WX:
        case LoginType.ADMIN_WX:

            break;
        // 前段通过 github 授权登录
        case LoginType.USER_GITHUB:
            ctx.redirect(oauthPath)
            break
        default:
            throw new ParameterException('没有相应的函数处理!')
    }

    throw new Success(token)
})


router.get('/github', async (ctx) => {
    console.log(111);
    // ctx.body = 111
    ctx.redirect(oauthPath)
})

// GitHub授权登录成功回调，地址必须与GitHub配置的回调地址一致
router.get('/github/callback', async ctx => {

    await GitHub.callback(ctx)

})


router.get('/:uid', new Auth().m, async (ctx) => {
    // const { uid } = ctx.params
    // if (!uid) {
    //     throw new ParameterException('uid必填!')
    // }

    // const res = await UserController.findByUid(uid)

    // throw new Success(res)

})

module.exports = router