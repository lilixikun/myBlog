/*
 * @Author: kun.xi 
 * @Date: 2020-03-17 17:22:18 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-05-07 14:37:28
 */
const { Model, Sequelize } = require('sequelize')
const Op = Sequelize.Op
const { sequelize } = require('../../core/db')

class Blog extends Model {

    static async findHotBlog() {

        const data = await sequelize.query("select uid,title,create_time from `t_blog` ORDER BY click_count DESC limit 10", { type: sequelize.QueryTypes.SELECT })
        if (!!data) {
            return data
        }
        return []
    }

    /**
     * 归档统计
     */
    static async orderByTime() {
        const data = await sequelize.query(`SELECT  DATE_FORMAT(create_time,"%Y-%m月") AS dates,GROUP_CONCAT(uid) AS ids FROM t_blog
        GROUP BY DATE_FORMAT(create_time,"%Y-%m月")
                ORDER BY DATE_FORMAT(create_time,"%Y-%m月") DESC`, { type: sequelize.QueryTypes.SELECT })
        let newData = []
        if (!!data) {
            for (let i = 0; i < data.length; i++) {
                const item = data[i];
                const ids = item.ids.split(',')
                const list = await Blog.findAll({
                    attributes: ['uid', 'title', 'createTime'],
                    where: {
                        uid: {
                            [Op.in]: ids
                        }
                    },
                    order: [
                        ['createTime', 'DESC']
                    ]
                })

                let newList = []
                if (list && list.length) {
                    list.forEach(val => {
                        newList.push(val.dataValues)
                    })
                }
                item.list = newList
                newData.push(item)
            }
        }
        if (newData.length) {
            return newData
        }
        return data

    }

}

Blog.init(
    {
        uid: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        summary: {
            type: Sequelize.STRING,
        },
        content: {
            type: Sequelize.TEXT,
            defaultValue: "123"
        },
        tagUid: {
            type: Sequelize.STRING,
        },
        clickCount: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        collectCount: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        fileUid: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        adminUid: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        },
        articlesPart: {
            type: Sequelize.STRING
        },
        blogSortUid: Sequelize.STRING(32),
        level: Sequelize.STRING,
        isPublish: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        isOriginal: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },
        sort: Sequelize.INTEGER
    },
    {
        createdAt: 'createTime',
        updatedAt: 'updateTime',
        underscored: true,
        tableName: 't_blog',
        comment: '博客表',
        sequelize,
        freezeTableName: true
    }
)

module.exports = Blog