/*
 * @Author: kun.xi 
 * @Date: 2020-03-24 15:17:28 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-04-16 17:54:04
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
        userUid: Sequelize.STRING(32),
        toUid: Sequelize.STRING(32),
        toUserUid: Sequelize.STRING(32),
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
        createdAt: 'createTime',
        updatedAt: 'updateTime',
        underscored: true,
        tableName: 't_comment',
        comment: '留言表',
        sequelize,
        freezeTableName: true
    }
)


module.exports = Comment