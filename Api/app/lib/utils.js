const jwt = require('jsonwebtoken')
const uuid = require("node-uuid")
// 随机生成Uid
const getUID = () => uuid.v1().replace(/-/g, "")
const { secretKey, expiresIn } = require('../../config').security

/**
 * 生成token
 * @param {*} uid 
 * @param {*} scope 
 */
const generateToken = (uid, scope) => {
    const token = jwt.sign({
        uid,
        scope
    }, secretKey, {
        expiresIn
    })

    return token
}

module.exports = {
    getUID,
    generateToken
}