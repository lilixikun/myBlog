/*
 * @Author: kun.xi 
 * @Date: 2020-03-03 15:41:54 
 * @Last Modified by: xi.kun
 * @Last Modified time: 2020-03-24 16:01:31
 */
function isThisType(val) {
    for (const key in this) {
        if (this[key] == val) {
            return true
        }
    }
    return false
}

// 是否原创
const OriginalType = {
    TRUE: 1,
    FALSE: 0,
    isThisType
}

// 是否发布
const PublishType = {
    TRUE: 1,
    FALSE: 0,
    isThisType
}

// 是否点赞评论
const CommentType = {
    'PRAISE': 1,
    'COMMENT': 0,
    isThisType
}

const RoleType = {
    'ADMID': 2,
    'COMMON': 1
}

const GenderType = {
    'MEN': 1,
    'WOMEN': 2
}

const CommonStatusType = {
    'TRUE': 1,
    'FALSE': 0,
    isThisType
}

module.exports = {
    RoleType,
    GenderType,
    CommonStatusType,
    CommentType
} 