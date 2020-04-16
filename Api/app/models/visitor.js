/*
 * @Author: kun.xi 
 * @Date: 2020-03-24 15:36:45 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-04-16 17:55:10
 */
const { Model, Sequelize } = require('sequelize')
const { sequelize } = require('../../core/db')

class Visitor extends Model {

}

Visitor.init(
    {
        uid: {
            type: Sequelize.STRING(32),
            allowNull: false,
            primaryKey: true
        },
        userName: Sequelize.STRING,
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        loginCount: Sequelize.INTEGER,
        lastLoginTime: Sequelize.DATE,
        lastLoginIp: Sequelize.STRING,
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: 1
        }
    },
    {
        createdAt: 'createTime',
        updatedAt: 'updateTime',
        underscored: true,
        tableName: 't_visitor',
        comment: '游客表',
        sequelize,
        freezeTableName: true
    }
)


module.exports = Visitor