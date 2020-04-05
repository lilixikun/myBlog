const { Validator, Rule } = require('../lib/validator')

class BlogSort extends Validator {
    constructor() {
        super()
        this.tagName = new Rule('isNotEmpty', '标签名名必填!')
    }
}

module.exports = BlogSort