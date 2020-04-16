const { Validator, Rule } = require('../lib/validator')

class User extends Validator {
    constructor() {
        super()
        this.type = new Rule('isNotEmpty', 'type不能为空')
        this.password = new Rule('isNotEmpty', '密码不能为空')
    }
}

module.exports = User