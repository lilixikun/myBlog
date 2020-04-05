const uuid = require("node-uuid")
// 随机生成Uid
const getUID = () => uuid.v1().replace(/-/g, "")

module.exports = {
    getUID
}