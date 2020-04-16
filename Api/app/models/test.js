/*
 * @Author: kun.xi 
 * @Date: 2020-03-07 15:07:13 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-04-16 14:56:39
 */
const { Model, Sequelize } = require('sequelize')
const { sequelize } = require('../../core/db')
class Test extends Model {

}

Test.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: Sequelize.STRING,
            allowNull: false,
            //自定义校验
            validate: { min: 1, max: 100 }
        },
        password: {
            type: Sequelize.STRING,
            set(val) {
                //生成盐
                //const salt = bcryptjs.genSaltSync(10);
                //加密密码
                //const pwd = bcryptjs.hashSync(val, salt);
                this.setDataValue('password', val + 123)
            }
        }
    },
    {
        // 不要添加时间戳属性 (updatedAt, createdAt)
        timestamps: true,
        // 不实际删除数据 而是设置一个新 deletedAt 属性，其值为当前日期 timestamps 启用时
        //paranoid: true,
        // 不需要 `createdAt`
        createdAt: false,
        // 需要 `updatedAt`，但列名为"updateTimestamp"
        updatedAt: 'updateTimestamp',
        // 自动设置字段为蛇型命名规则
        underscored: true,
        // 定义表名
        tableName: 'test',
        // 添加注释
        comment: '我是测试表',
        sequelize,
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    }
)

module.exports = Test