const uuid = require("node-uuid")
// 随机生成Uid
const getUID = () => uuid.v1().substring(20)

module.exports = {
    getUID
}