/*
 * @Author: kun.xi 
 * @Date: 2020-03-24 15:17:36 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-04-17 16:03:53
 */
const { Model, Sequelize } = require('sequelize')
const bcryptjs = require('bcryptjs')
const { sequelize } = require('../../core/db')
const { ForBiden, Faild } = require('../../core/httpException')
class User extends Model {

    /**
     * 验证账户密码是否正确
     * @param {*} userName 
     * @param {*} passWord 
     */
    static async verifyUserNamePassword(userName, passWord) {
        const user = await User.findOne({
            where: {
                userName
            }
        })
        if (!user) {
            throw new ForBiden('账户不存在!')
        }
        // 验证密码是否正确
        const correct = bcryptjs.compareSync(passWord, user.passWord)
        if (!correct) {
            throw new Faild('密码不正确!')
        }
        return user
    }


    /**
     * 验证邮箱登录是否正确
     * @param {*} email 
     * @param {*} passWord 
     */
    static async verifyEmailPassword(email, passWord) {
        const user = await User.findOne({
            where: {
                email
            }
        })
        if (!user) {
            throw new ForBiden('账户不存在!')
        }
        // 验证密码是否正确
        const correct = bcryptjs.compareSync(email, user.passWord)
        if (!correct) {
            throw new Faild('密码不正确!')
        }
        return user
    }

}

User.init(
    {
        uid: {
            type: Sequelize.STRING(32),
            allowNull: false,
            primaryKey: true
        },
        userName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        passWord: {
            type: Sequelize.STRING,
            allowNull: false,
            set(val) {
                //生成盐
                const salt = bcryptjs.genSaltSync(10);
                //加密密码
                const pwd = bcryptjs.hashSync(val, salt);
                this.setDataValue('passWord', pwd)
            }
        },
        nickName: Sequelize.STRING,
        avatar: Sequelize.STRING,
        email: Sequelize.STRING,
        birthday: Sequelize.STRING,
        mobile: Sequelize.STRING(50),
        gender: {
            type: Sequelize.BOOLEAN,
            defaultValuee: 1
        },
        validCode: Sequelize.STRING,
        summary: Sequelize.STRING(200),
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: 1
        },
        loginCount: Sequelize.INTEGER,
        lastLoginIp: Sequelize.STRING,
        lastLoginTime: Sequelize.DATE,
        ipSource: Sequelize.STRING,
        commentStatus: {
            type: Sequelize.BOOLEAN,
            defaultValue: 1
        },
        startEmailNotification: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        }
    },
    {
        createdAt: 'createTime',
        updatedAt: 'updateTime',
        underscored: true,
        tableName: 't_user',
        comment: '用户表',
        sequelize,
        freezeTableName: true
    }
)


module.exports = User
