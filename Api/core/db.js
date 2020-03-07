const Sequelize = require('sequelize')

const { dbName, host, port, user, password } = require('../config').database

const sequelize = new Sequelize(dbName, user, password, {
    port,
    host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    dialectOptions: {
        // 字符集
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    timezone: '+08:00' //时区转换
})

// 注意: `force: true` 选项会在表存在时首先删除表
sequelize.sync({
    force: false
})

// 测试连接是否正常
sequelize.authenticate().
    then(() => console.log('链接正常')).
    catch(err => console.log('链接失败', err))

module.exports = {
    sequelize
}