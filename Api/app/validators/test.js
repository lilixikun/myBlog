const { Validator, Rule } = require('../lib/validator')

class Test extends Validator {
    constructor() {
        super()
        this.name = [
            new Rule('isEmail', '请输入正确的邮箱地址!'),
            new Rule('isNotEmpty', '它必须为空')
        ]
    }

    test(data) {
        console.log(data);

        return false
    }

    test1() {
        console.log(2)
    }

    test2() {
        console.log(3)
    }
}

module.exports = Test