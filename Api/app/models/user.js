/*
 * @Author: kun.xi 
 * @Date: 2020-03-24 15:17:36 
 * @Last Modified by: xi.kun
 * @Last Modified time: 2020-03-24 15:40:54
 */
const { Model, Sequelize } = require('sequelize')
const { sequelize } = require('../../core/db')

class User extends Model {

}

User.init(
    {
        uid: {
            type: Sequelize.STRING(32),
            allowNull: false,
            primaryKey: true
        },
        user_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        pass_word: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nick_name: Sequelize.STRING,
        avatar: Sequelize.STRING,
        email: Sequelize.STRING,
        birthday: Sequelize.STRING,
        mobile: Sequelize.STRING(50),
        gender: {
            type: Sequelize.BOOLEAN,
            defaultValuee: 1
        },
        valid_code: Sequelize.STRING,
        summary: Sequelize.STRING(200),
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: 1
        },
        login_count: Sequelize.INTEGER,
        last_login_ip: Sequelize.STRING,
        last_login_time: Sequelize.DATE,
        ip_source: Sequelize.STRING,
        comment_status: {
            type: Sequelize.BOOLEAN,
            defaultValue: 1
        },
        start_email_notification: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        }
    },
    {
        createdAt: 'create_time',
        updatedAt: 'update_time',
        underscored: true,
        tableName: 't_user',
        comment: '文件表',
        sequelize,
        freezeTableName: true
    }
)


module.exports = User
