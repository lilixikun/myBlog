/*
 * @Author: kun.xi 
 * @Date: 2020-03-24 15:17:28 
 * @Last Modified by:   xi.kun 
 * @Last Modified time: 2020-03-24 15:17:28 
 */

const { Model, Sequelize } = require('sequelize')
const { sequelize } = require('../../core/db')

class Comment extends Model {

}

Comment.init(
    {
        uid: {
            type: Sequelize.STRING(32),
            allowNull: false,
            primaryKey: true
        },
        user_uid: Sequelize.STRING(32),
        to_uid: Sequelize.STRING(32),
        to_user_uid: Sequelize.STRING(32),
        content: Sequelize.STRING,
        status: {
            type: Sequelize.BOOLEAN,
            defaultValuee: 1
        },
        source: Sequelize.STRING,
        type: {
            type: Sequelize.BOOLEAN,
            defaultValuee: 1
        }
    },
    {
        createdAt: 'create_time',
        updatedAt: 'update_time',
        underscored: true,
        tableName: 't_comment',
        comment: '留言表',
        sequelize,
        freezeTableName: true
    }
)


module.exports = Comment