const Tag = require('../models/tag')
const { Faild } = require('../../core/httpException')
const { getUID } = require('../lib/utils')

class TagController {

    static async findAndCountAll(offset = 1, limit = 10) {

        offset = Number(offset) - 1
        limit = Number(limit)

        const res = await Tag.findAndCountAll({
            order: [
                ['sort', 'DESC'],
                ['create_time', 'DESC']
            ],
            limit,
            offset
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
            res = await Tag.update(obj, {
                where: {
                    uid: obj.uid
                }
            })
            if (!res) {
                throw new Faild('修改失败')
            }
        } else {
            obj.uid = getUID()
            res = await Tag.create(obj)
            if (!res) {
                throw new Faild('添加失败')
            }
        }
        return res
    }

    static async delete(uid) {
        const res = await Tag.destroy({
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

module.exports = TagController