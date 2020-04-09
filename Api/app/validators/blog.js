const { Validator, Rule } = require('../lib/validator')

class Blog extends Validator {
    constructor() {
        super()
        this.title = new Rule('isNotEmpty', '博客标题必填!')
        this.content = new Rule('isNotEmpty', '内容必填!')
    }
}

module.exports = Blog