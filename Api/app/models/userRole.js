/*
 * @Author: kun.xi 
 * @Date: 2020-03-24 15:33:17 
 * @Last Modified by: xi.kun
 * @Last Modified time: 2020-03-24 15:35:00
 */
const { Model, Sequelize } = require('sequelize')
const { sequelize } = require('../../core/db')

class UserRole extends Model {

}

UserRole.init(
    {
        id: {
            type: Sequelize.STRING(32),
            allowNull: false,
            primaryKey: true
        },
        user_id: {
            type: Sequelize.STRING(32),
            allowNull: false
        },
        role_id: {
            type: Sequelize.STRING(32),
            allowNull: false
        }
    },
    {
        createdAt: 'create_time',
        updatedAt: 'update_time',
        underscored: true,
        tableName: 't_user_role',
        comment: '用户角色表',
        sequelize,
        freezeTableName: true
    }
)


module.exports = UserRole