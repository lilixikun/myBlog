/*
 * @Author: kun.xi 
 * @Date: 2020-03-18 12:01:26 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-04-09 14:52:45
 */
const { Model, Sequelize } = require('sequelize')
const { sequelize } = require('../../core/db')

class Collect extends Model {

}

Collect.init(
    {
        uid: {
            type: Sequelize.STRING(32),
            allowNull: false,
            primaryKey: true
        },
        user_uid: {
            type: Sequelize.STRING(32),
            allowNull: false
        },
        blog_uid: {
            type: Sequelize.STRING(32),
            allowNull: false
        },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValuee: 1
        }
    },
    {
        createdAt: 'create_time',
        updatedAt: 'update_time',
        underscored: true,
        tableName: 't_collect',
        comment: '博客收藏表',
        sequelize,
        freezeTableName: true
    }
)


module.exports = Collect