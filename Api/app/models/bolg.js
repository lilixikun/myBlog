/*
 * @Author: kun.xi 
 * @Date: 2020-03-17 17:22:18 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-04-26 15:08:05
 */
const { Model, Sequelize } = require('sequelize')
const { sequelize } = require('../../core/db')

class Blog extends Model {

    static async findHotBlog() {

        const data = await sequelize.query("select uid,title,create_time from `t_blog` ORDER BY click_count DESC limit 10", { type: sequelize.QueryTypes.SELECT })
        if (!!data) {
            return data
        }
        return []
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