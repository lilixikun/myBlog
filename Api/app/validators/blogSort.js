const { Validator, Rule } = require('../lib/validator')

class BlogSort extends Validator {
    constructor() {
        super()
        this.sortName = new Rule('isNotEmpty', '分类名必填!')
    }
}

module.exports = BlogSort