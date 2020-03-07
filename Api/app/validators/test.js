const { Validator, Rule } = require('../lib/validator')

class Test extends Validator {
    constructor() {
        super()
        this.userName = new Rule('isNotEmpty', '它必须为空')
        this.password = new Rule('isNotEmpty', '它必须为空')
    }
}

module.exports = Test