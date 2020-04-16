const { Validator, Rule } = require('../lib/validator')

class Auth extends Validator {
    constructor() {
        super()
        this.title = new Rule('isNotEmpty', '登录类型必填!')
    }
}

module.exports = Auth