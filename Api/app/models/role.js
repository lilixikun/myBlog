/*
 * @Author: kun.xi 
 * @Date: 2020-03-24 15:26:17 
 * @Last Modified by: xi.kun
 * @Last Modified time: 2020-03-24 15:28:27
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
        role_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        role_type: {
            type: Sequelize.BOOLEAN,
            defaultValue: 1
        },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValuee: 1
        },
        summary: Sequelize.STRING,
        category_menu_uids: Sequelize.TEXT
    },
    {
        createdAt: 'create_time',
        updatedAt: 'update_time',
        underscored: true,
        tableName: 't_role',
        comment: '角色表',
        sequelize,
        freezeTableName: true
    }
)


module.exports = Role