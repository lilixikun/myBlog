/*
 * @Author: kun.xi 
 * @Date: 2020-03-24 15:36:45 
 * @Last Modified by: xi.kun
 * @Last Modified time: 2020-03-24 15:39:26
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
        user_name: Sequelize.STRING,
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        login_count: Sequelize.INTEGER,
        last_login_time: Sequelize.DATE,
        last_login_ip: Sequelize.STRING,
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: 1
        }
    },
    {
        createdAt: 'create_time',
        updatedAt: 'update_time',
        underscored: true,
        tableName: 't_visitor',
        comment: '游客表',
        sequelize,
        freezeTableName: true
    }
)


module.exports = Visitor