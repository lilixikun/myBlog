/*
 * @Author: kun.xi 
 * @Date: 2020-03-17 17:22:18 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-04-09 10:44:50
 */
const { Model, Sequelize } = require('sequelize')
const { sequelize } = require('../../core/db')

class Blog extends Model {

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
        },
        tagUid: {
            type: Sequelize.STRING,
        },
        clickCount: {
            type: Sequelize.INTEGER
        },
        collectCount: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        fileUid: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN
        },
        adminUid: {
            type: Sequelize.STRING
        },
        isOriginal: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        },
        articlesPart: {
            type: Sequelize.STRING
        },
        blogSortUid: {
            type: Sequelize.STRING
        },
        level: {
            type: Sequelize.BOOLEAN
        },
        isPublish: {
            type: Sequelize.STRING
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