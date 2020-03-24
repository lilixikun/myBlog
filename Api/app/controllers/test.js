const Test = require('../models/test')
const Blog = require('../models/bolg')
const { Faild } = require('../../core/httpException')

class testController {

    static async add(obj) {
        const res = await Test.create(obj)
        if (!res) {
            throw new Faild('添加失败')
        }
        return res
    }

    static async dele(id) {
        const res = await Test.destroy({
            where: {
                id
            }
        })
        if (!res) {
            throw new Faild('删除失败')
        }
        return res
    }

    static async update(obj) {
        const res = await Test.update(obj, {
            where: {
                id: obj.id
            }
        })
        if (!res) {
            throw new Faild('修改失败')
        }
        return res
    }

    static async find(id) {
        console.log(id);

        let data = await Test.findByPk(id)
        if (!data) {
            throw new Faild('查找失败')
        }
        return data
    }
}

module.exports = testController