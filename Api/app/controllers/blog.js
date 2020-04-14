const Blog = require('../models/bolg')
const { Faild } = require('../../core/httpException')
const { getUID } = require('../lib/utils')

class blogController {

    static async findAll() {
        const res = await Blog.findAll({
            order: [
                ['sort', 'DESC'],
                ['create_time', 'DESC']
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
            res = await Blog.update(obj, {
                where: {
                    uid: obj.uid
                }
            })
            if (!res) {
                throw new Faild('修改失败')
            }
        } else {
            obj.uid = getUID()
            res = await Blog.create(obj)
            if (!res) {
                throw new Faild('添加失败')
            }
        }
        return res
    }

    static async findByUid(uid) {
        const res = await Blog.findOne({
            where: {
                uid
            }
        })
        if (!res) {
            throw new Faild('查询失败')
        }
        return res
    }

    static async delete(uid) {
        const res = await Blog.destroy({
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

module.exports = blogController