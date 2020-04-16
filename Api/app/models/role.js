/*
 * @Author: kun.xi 
 * @Date: 2020-03-24 15:26:17 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-04-16 17:54:30
 */
const { Model, Sequelize } = require('sequelize')
const { sequelize } = require('../../core/db')

class Role extends Model {

}

Role.init(
    {
        uid: {
            type: Sequelize.STRING(32),
            allowNull: false,
            primaryKey: true
        },
        roleName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        roleType: {
            type: Sequelize.BOOLEAN,
            defaultValue: 1
        },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValuee: 1
        },
        summary: Sequelize.STRING,
        categoryMenuUids: Sequelize.TEXT
    },
    {
        createdAt: 'createTime',
        updatedAt: 'updateTime',
        underscored: true,
        tableName: 't_role',
        comment: '角色表',
        sequelize,
        freezeTableName: true
    }
)


module.exports = Role