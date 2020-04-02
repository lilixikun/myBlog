const BlogSort = require('../models/blog_sort')
const { Faild } = require('../../core/httpException')

class blogSortController {

    static async findAll() {
        const res = await BlogSort.findAll();
        if (!res) {
            return []
        }
        return res
    }
}

module.exports = blogSortController