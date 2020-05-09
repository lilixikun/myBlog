const BlogSort = require('../models/blog_sort')
const { Faild } = require('../../core/httpException')
const { getUID } = require('../lib/utils')

class blogSortController {

    static async findAndCountAll(offset = 1, limit = 10) {

        offset = Number(offset) - 1
        limit = Number(limit)

        const res = await BlogSort.findAndCountAll({
            order: [
                ['sort', 'DESC'],
                ['create_time', 'DESC']
            ],
            limit,
            offset: offset * limit
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

            console.log(obj);
            res = await BlogSort.update(obj, {
                where: {
                    uid: obj.uid
                }
            })
            if (!res) {
                throw new Faild('修改失败')
            }
        } else {
            obj.uid = getUID()
            res = await BlogSort.create(obj)
            if (!res) {
                throw new Faild('添加失败')
            }
        }
        return res
    }

    static async delete(uid) {
        const res = await BlogSort.destroy({
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

module.exports = blogSortController