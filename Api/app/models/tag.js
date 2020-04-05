/*
 * @Author: kun.xi 
 * @Date: 2020-03-24 15:29:06 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-04-05 09:48:36
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
        tagName: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        content: Sequelize.STRING(1000),
        clickCount: Sequelize.INTEGER,
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
        tableName: 't_tag',
        comment: '标签表',
        sequelize,
        freezeTableName: true
    }
)


module.exports = Tag