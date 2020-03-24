/*
 * @Author: kun.xi 
 * @Date: 2020-03-17 17:22:18 
 * @Last Modified by: xi.kun
 * @Last Modified time: 2020-03-18 12:02:32
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
        tag_uid: {
            type: Sequelize.STRING,
        },
        click_count: {
            type: Sequelize.INTEGER
        },
        collect_count: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        file_uid: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN
        },
        admin_uid: {
            type: Sequelize.STRING
        },
        is_original: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        },
        articles_part: {
            type: Sequelize.STRING
        },
        blog_sort_uid: {
            type: Sequelize.STRING
        },
        level: {
            type: Sequelize.BOOLEAN
        },
        is_publish: {
            type: Sequelize.STRING
        },
        sort: Sequelize.INTEGER
    },
    {
        createdAt: 'create_time',
        updatedAt: 'update_time',
        underscored: true,
        tableName: 't_blog',
        comment: '博客表',
        sequelize,
        freezeTableName: true
    }
)

module.exports = Blog