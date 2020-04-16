/*
 * @Author: kun.xi 
 * @Date: 2020-03-18 12:01:26 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-04-16 17:53:36
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
        userUid: {
            type: Sequelize.STRING(32),
            allowNull: false
        },
        blogUid: {
            type: Sequelize.STRING(32),
            allowNull: false
        },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValuee: 1
        }
    },
    {
        createdAt: 'createTime',
        updatedAt: 'updateTime',
        underscored: true,
        tableName: 't_collect',
        comment: '博客收藏表',
        sequelize,
        freezeTableName: true
    }
)


module.exports = Collect