/*
 * @Author: kun.xi 
 * @Date: 2020-03-24 15:17:23 
 * @Last Modified by: xi.kun
 * @Last Modified time: 2020-03-24 15:31:50
 */

const { Model, Sequelize } = require('sequelize')
const { sequelize } = require('../../core/db')

class File extends Model {

}

File.init(
    {
        uid: {
            type: Sequelize.STRING(32),
            allowNull: false,
            primaryKey: true
        },
        file_old_name: Sequelize.STRING,
        pic_name: Sequelize.STRING,
        pic_url: Sequelize.STRING,
        pic_expanded_name: Sequelize.STRING,
        file_size: Sequelize.INTEGER,
        file_sort_uid: Sequelize.STRING,
        user_uid: Sequelize.STRING,
        status: {
            type: Sequelize.BOOLEAN,
            defaultValuee: 1
        },
        server_url: Sequelize.STRING
    },
    {
        createdAt: 'create_time',
        updatedAt: 'update_time',
        underscored: true,
        tableName: 't_file',
        comment: '文件表',
        sequelize,
        freezeTableName: true
    }
)


module.exports = File