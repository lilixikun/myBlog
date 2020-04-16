/*
 * @Author: kun.xi 
 * @Date: 2020-04-16 11:12:31 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-04-16 17:20:23
 */
const jwt = require('jsonwebtoken')
const { AuthFaild } = require('../../core/httpException')
const { secretKey } = require('../../config').security

class Auth {
    constructor(level) {
        this.level = level || 1
        Auth.USER = 8
        Auth.ADMIN = 16
        Auth.SUPER_ADMIN = 32
    }

    get m() {
        return async (ctx, next) => {
            // 获取token
            const token = Auth.resolveAuthorizationHeader(ctx)

            if (!token) {
                throw new AuthFaild('Bad Authorization header format. Format is "Authorization: Bearer <token>"')
            }

            let errMsg = "token 不合法"
            // token 验证
            try {
                var decode = jwt.verify(token, secretKey)
            } catch (error) {
                if (error.name === 'TokenExpiredError') {
                    errMsg = 'token 已过期请重新登录'
                }
                throw new AuthFaild(errMsg)
            }

            // 权限判断
            if (decode.scope < this.level) {
                throw new AuthFaild('权限不足')
            }

            // 返回 uid decode
            ctx.auth = {
                uid: decode.uid,
                scope: decode.scope
            }

            await next()
        }
    }


    /**
     * token 验证
     * @param {*} token 
     */
    static verifyToken(token) {
        try {
            jwt.verify(token, secretKey)
            return true
        } catch (error) {
            return false
        }
    }

    /**
     * 获取请求头Authorization 上的token
     * @param {*} ctx 
     */
    static resolveAuthorizationHeader(ctx) {
        if (!ctx.req.headers || !ctx.req.headers.authorization) {
            return false
        }
        const parts = ctx.header.authorization.split(' ');

        if (parts.length === 2) {
            const scheme = parts[0];
            const credentials = parts[1];

            if (/^Bearer$/i.test(scheme)) {
                return credentials;
            }
        }
        return false
    }
}

module.exports = {
    Auth
}