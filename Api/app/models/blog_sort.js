/*
 * @Author: kun.xi 
 * @Date: 2020-03-18 12:01:26 
 * @Last Modified by: xi.kun
 * @Last Modified time: 2020-03-18 12:09:44
 */
const { Model, Sequelize } = require('sequelize')
const { sequelize } = require('../../core/db')

class BlogSort extends Model {

}

BlogSort.init(
    {
        uid: {
            type: Sequelize.STRING(32),
            allowNull: false,
            primaryKey: true
        },
        sotr_name: Sequelize.STRING,
        content: Sequelize.STRING,
        status: Sequelize.BOOLEAN,
        sort: Sequelize.INTEGER,
        click_count: Sequelize, INTEGER
    },
    {
        createdAt: 'create_time',
        updatedAt: 'update_time',
        underscored: true,
        tableName: 't_blog_sort',
        comment: '博客分类表表',
        sequelize,
        freezeTableName: true
    }
)


module.exports = BlogSort