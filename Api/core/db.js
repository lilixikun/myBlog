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
    timezone: '+08:00' //时区转换
})

sequelize.sync({
    force: true
})

module.exports = {
    sequelize
}