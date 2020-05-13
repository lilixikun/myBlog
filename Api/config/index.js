/*
 * @Author: kun.xi 
 * @Date: 2020-03-03 15:42:15 
 * @Last Modified by: xi.kun
 * @Last Modified time: 2020-05-12 14:53:42
 */

module.exports = {
    environment: 'dev',
    database: {
        dbName: 'island',
        host: '47.98.161.153',
        port: 3306,
        user: 'root',
        password: 'admin'
    },
    security: {
        secretKey: 'xikun',
        expiresIn: 60 * 60
    },
    github: {
        oauthPath: 'https://github.com/login/oauth/authorize?client_id=Iv1.34beee48ab7aa500',
        appId: 61245,
        clientID: 'Iv1.34beee48ab7aa500',
        clientSecret: '55ce5b879bcecb00f701524322ef7cbb13101f8b',
        getAccessToken: 'https://github.com/login/oauth/access_token',
        getUserInfo: 'https://api.github.com/user?access_token='
    }
}