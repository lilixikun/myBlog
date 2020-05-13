/*
 * @Author: kun.xi 
 * @Date: 2020-03-24 15:29:06 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-05-13 18:03:22
 */
const { Model, Sequelize } = require('sequelize')
const { sequelize } = require('../../core/db')

class Tag extends Model {
    static async findHotTag() {
        const data = await sequelize.query("select * from `t_tag` ORDER BY click_count DESC limit 10", { type: sequelize.QueryTypes.SELECT })
        if (!!data) {
            return data
        }
    }

    static async findByUid(uid) {
        const res = await Tag.findByPk(uid)
        return res
    }
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
        img: Sequelize.STRING,
        content: Sequelize.STRING(1000),
        clickCount: Sequelize.INTEGER,
        status: {
            type: Sequelize.BOOLEAN,
            defaultValuee: 1
        },
        sort: Sequelize.INTEGER
    },
    {
        createdAt: 'createTime',
        updatedAt: 'updateTime',
        underscored: true,
        tableName: 't_tag',
        comment: '标签表',
        sequelize,
        freezeTableName: true
    }
)


module.exports = Tag