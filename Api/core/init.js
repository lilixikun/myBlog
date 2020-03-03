/*
 * @Author: kun.xi 
 * @Date: 2020-03-03 16:42:45 
 * @Last Modified by:   xikun 
 * @Last Modified time: 2020-03-03 16:42:45 
 */

const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitManager {

    static initCore(app) {
        InitManager.app = app;
        InitManager.initLoadRouters()
    }

    /**
     * 配置全局自动加载路由
     */
    static initLoadRouters() {
        // 路由根目录
        const url = `${process.cwd()}/app/api`
        requireDirectory(module, url, { visit: whenModuleLoad })

        function whenModuleLoad(obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes());
            } else if (typeof obj === "object") {
                // 兼容 module.exports 导出对象的写法
                for (let k in obj) {
                    if (obj[k] instanceof Router) {
                        InitManager.app.use(obj[k].routes());
                    }
                }
            }
        }
    }
}

module.exports = {
    InitManager
}