const User = require('../models/user')
const { Faild } = require('../../core/httpException')
const { getUID } = require('../lib/utils')

class UserController {

    static async findByUid(uid) {
        const res = await User.findByPk(uid)

        if (!res) {
            throw new Faild('未找到该用户')
        }
        return res
    }

    static async findAll() {
        const res = await User.findAll({
            order: [
                ['sort', 'DESC'],
                ['createTime', 'DESC']
            ]
        });
        if (!res) {
            return []
        }
        return res
    }

    static async create(obj) {
        // 修改
        let res
        if (obj.uid) {
            res = await User.update(obj, {
                where: {
                    uid: obj.uid
                }
            })
            if (!res) {
                throw new Faild('修改失败')
            }
        } else {
            obj.uid = getUID()
            res = await User.create(obj)
            if (!res) {
                throw new Faild('添加失败')
            }
        }
        return res
    }

    static async delete(uid) {
        const res = await User.destroy({
            where: {
                uid
            }
        })
        if (!res) {
            throw new Faild('操作失败')
        }
        return res
    }
}

module.exports = UserController