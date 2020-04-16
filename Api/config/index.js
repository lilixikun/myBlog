/*
 * @Author: kun.xi 
 * @Date: 2020-03-03 15:42:15 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-04-16 17:19:31
 */

module.exports = {
    environment: 'dev',
    database: {
        dbName: 'island',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root'
    },
    security: {
        secretKey: 'xikun',
        expiresIn: 60 * 60
    },
}