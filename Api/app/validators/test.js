const { Validator, Rule } = require('../lib/validator')

class Test extends Validator {
    constructor() {
        super()
        this.name = [
            new Rule('isEmail', '请输入正确的邮箱地址!'),
            new Rule('isEmpty', '它必须为空')
        ]
    }
}

module.exports = Test