/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-03-05 09:36:26 
 * @Last Modified by: xi.kun
 * @Last Modified time: 2020-03-07 12:30:15
 */
const validator = require('validator');

const { isString, isFunction, isArray, get } = require('lodash')
const { ParameterExceptio, HttpException } = require('../../core/httpException')

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
        this.errors = []
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
        const hasErr = await this.checkRules()
        if (!hasErr) {
            throw new ParameterExceptio(this.errors)
        } else {
            ctx.v = this
            return this
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

        for (const key of keys) {
            // 根据 key 拿到value
            const [field, dataValue] = this._findValueData(key)

            if (!dataValue) {
                this.errors.push({ key: field, msg: '参数必填' })
                return false
            }

            const value = this[key]

            if (isArray(value)) {
                let errs = [];
                for (const it of value) {
                    const valid = await it.validate(dataValue)
                    if (!valid) {
                        errs.push(it.message)
                    }
                }
                if (errs.length) {
                    this.errors.push({ key: field, msg: errs })
                    return false
                }
            } else {
                let errs = [];
                const valid = await value.validate(dataValue)
                if (!valid) {
                    errs.push(value.message)
                }
                if (errs.length !== 0) {
                    this.errors.push({ key: field, msg: errs })
                    return false
                }
            }
        }

        // 对 属性函数进行 筛选 
        //validateFuncKeys
        let set = new Set()
        const obj = Reflect.getPrototypeOf(this)
        const ownKeys = Reflect.ownKeys(obj)

        ownKeys.forEach(key => set.add(key))
        let funKeys = Array.from(set.values())
        funKeys = funKeys.filter(fun => typeof this[fun] === "function" && fun !== "constructor")
        if (funKeys.length) {

            for (const fun of funKeys) {
                const customerValidateFunc = get(this, fun)

                // 自定义校验函数，第一个参数是校验是否成功，第二个参数为错误信息
                let validRes;
                try {
                    validRes = customerValidateFunc.call(this, this.data)
                    // 返回 [false,'xxx']
                    if (isArray(validRes) && !validRes[0]) {
                        this.errors.push({ key: fun, message: validRes[1] })
                        // 优化让遇到错误就直接返回不继续往下走
                        return false
                    }
                    // 直接返回 false 的情况
                    else if (!validRes) {
                        this.errors.push({ key: fun, message: '参数错误' })
                        return false
                    }
                } catch (error) {
                    if (error instanceof HttpException) {
                        this.errors.push({ key: fun, message: error.msg });
                    }
                    else {
                        this.errors.push({ key: fun, message: error.message });
                    }
                }
            }
        }

        return this.errors.length === 0
    }


    /**
     * 找到传参的值
     * @param {*} field 
     */
    _findValueData(field) {
        const keys = Object.keys(this.data)

        for (const key of keys) {
            const dataValue = get(this.data[key], field)
            if (dataValue !== void 0) {
                return [field, dataValue]
            }
        }
        return [field]
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
                case 'isNotEmpty':
                    return !validator.isEmpty(str, this.options)

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

module.exports = {
    Validator,
    Rule
} 