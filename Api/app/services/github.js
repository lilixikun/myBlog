/*
 * @Author: kun.xi 
 * @Date: 2020-04-17 12:34:02 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-04-17 14:06:45
 */
const querystring = require('querystring')
const axios = require('axios')

const { clientID, clientSecret, getAccessToken, getUserInfo } = require('../../config').github

class GitHub {

    static async callback(ctx) {

        // 服务器认证成功，回调带回认证状态code
        const code = ctx.query.code
        const params = {
            client_id: clientID,
            client_secret: clientSecret,
            code: code
        }


        try {
            // 申请令牌token
            let res = await axios.post(getAccessToken, params)

            if (res.status === 200) {
                const access_token = querystring.parse(res.data).access_token

                // 根据token获取用户信息
                const response = await axios.get(getUserInfo + access_token)

                if (response.status === 200) {
                    console.log(response.data);
                    // 采集用户信息
                    ctx.body = `
                    <h1>${response.data.login}</h1>
                `
                }
            }

        } catch (error) {
            ctx.body = `
                <h1>授权失败</h1>
            `
            setTimeout(() => {
                ctx.redirect('https://github.com/LiLixikun')
            }, 2000);
        }


    }
}

module.exports = GitHub