/*
 * @Author: kun.xi 
 * @Date: 2020-03-24 15:29:06 
 * @Last Modified by: xi.kun
 * @Last Modified time: 2020-03-24 15:32:40
 */
const { Model, Sequelize } = require('sequelize')
const { sequelize } = require('../../core/db')

class Tag extends Model {

}

Tag.init(
    {
        uid: {
            type: Sequelize.STRING(32),
            allowNull: false,
            primaryKey: true
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false
        },
        click_count: Sequelize.INTEGER,
        status: {
            type: Sequelize.BOOLEAN,
            defaultValuee: 1
        },
        sort: Sequelize.INTEGER
    },
    {
        createdAt: 'create_time',
        updatedAt: 'update_time',
        underscored: true,
        tableName: 't_role',
        comment: '标签表',
        sequelize,
        freezeTableName: true
    }
)


module.exports = Tag