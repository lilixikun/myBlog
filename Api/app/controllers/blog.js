const Blog = require('../models/bolg')
const { Faild } = require('../../core/httpException')
const Tag = require('../models/tag')
const { getUID } = require('../lib/utils')

class blogController {

    static async findAndCountAll(offset = 1, limit = 10) {

        offset = Number(offset) - 1
        limit = Number(limit)

        const res = await Blog.findAndCountAll({
            attributes: ['uid', 'title', 'summary', 'createTime', 'author', 'tagUid', 'clickCount', 'status','fileUid'],
            order: [
                ['click_count', 'DESC'],
                ['sort', 'DESC'],
                ['createTime', 'DESC']
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

        res.dataValues.clickCount = res.dataValues.clickCount + 1
        await Blog.update(res.dataValues, {
            where: {
                uid
            }
        })
        // 刷新标签点击数量
        if (res.tagUid) {
            const tagres = await Tag.findOne({
                where: {
                    uid: res.tagUid
                }
            })
            if (tagres && tagres.dataValues) {
                tagres.dataValues.clickCount = tagres.dataValues.clickCount + 1
                await Tag.update(tagres.dataValues, {
                    where: {
                        uid: tagres.uid
                    }
                })
            }
        }
        // 刷新分类点击数量
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