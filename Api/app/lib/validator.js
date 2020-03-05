/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-03-05 09:36:26 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-03-05 14:32:43
 */
const validator = require('validator');

const { isString, isFunction, isArray, get } = require('lodash')

class Validator {
    constructor() {
        /**
         * 装载数据的容器
         */
        this.data = {}
        /**
         * 解析后的数据
         */
        this.parsed = {}
        /**
         * 数据校验错误集合
         */
        this.errors = {}
    }

    /**
     * 校验函数
     * @param {*} ctx koa context
     * @param {*} alias 别名
     */
    async validate(ctx, alias) {
        this.data = {
            body: ctx.request.body,
            query: ctx.request.query,
            header: ctx.request.header,
            params: ctx.parms
        }
    }


    async checkRules() {
        // 获取类上的所有 属性和方法
        let keys = Reflect.ownKeys(this)
        // 对属性进行筛选 
        keys = keys.filter(key => {
            const rules = this[key]

            if (isArray(rules)) {
                if (rules.length === 0) {
                    return false
                }
                for (const rule of rules) {
                    if (!rule instanceof Rule) {
                        throw new Error('every rule must be a instance of Rule')
                    }
                }
                return true
            } else {
                return rules instanceof Rule
            }
        })

        if (keys.length === 0) {
            return
        }

        // 根据 key 拿到value
        const [field, dataValue] = this._findValueData(key)
        for (const key of keys) {
            const value = this[key]
            if (isArray(value)) {
                for (const it of value) {
                    let errors = []
                    valid = it.validate(dataValue)
                    if (!valid) {
                        errors.push(it.message)
                    }
                }
            }
        }
    }

    _findValueData(field) {
        const keys = Object.keys(this.data)
        for (const key of keys) {
            const dataValue = get(this.data[key], field)
            if (!dataValue === void 0) {
                return [field, dataValue]
            }
        }
        return []
    }

}


class Rule {
    /**
     * 
     * @param {*} validatorFunc 校验类型
     * @param {*} message 错误信息
     * @param  {...any} options 
     */
    constructor(validatorFunc, message, ...options) {
        this.validatorFunc = validatorFunc
        this.message = message || '参数错误'
        this.options = options
    }

    validate(str) {
        //如果是自定义校验
        if (isFunction(this.validatorFunc)) {
            this.validatorFunc(str)
        } else {
            switch (this.validatorFunc) {
                case 'isInt':
                    if (isString(str)) {
                        return validator.isInt(str, this.options)
                    } else {
                        return validator.isInt(String(str), this.options)
                    }
                case 'isFloat':
                    if (isString(str)) {
                        return validator.isFloat(str, this.options)
                    } else {
                        return validator.isFloat(String(str), this.options)
                    }
                case 'isBoolean':
                    if (isString(str)) {
                        return validator.isBoolean(str, this.options)
                    } else {
                        return validator.isBoolean(String(str), this.options)
                    }
                case 'isEmpty':
                    return validator.isEmpty(str, this.options)

                case 'isEmail':
                    return validator.isEmail(str, this.options)

                case 'isIP':
                    return validator.isIP(str, this.options)
                default:
                    return validator[this.validatorFunc](str, ...this.options)
            }
        }
    }
}

module.exports = Rule