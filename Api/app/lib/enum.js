/*
 * @Author: kun.xi 
 * @Date: 2020-03-03 15:41:54 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-04-16 14:41:24
 */
function isThisType(val) {
    for (const key in this) {
        console.log(key,val);
        
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

const LoginType = {
    USER_NAME: 100,
    USER_EMAIL: 101,
    USER_MOBILE: 102,
    USER_WX: 103,
    USER_GITHUB: 104,
    ADMIN_NAME: 200,
    ADMIN_EMAIL: 201,
    ADMIN_MOBILE: 201,
    ADMIN_WX: 202,
    isThisType
}

module.exports = {
    RoleType,
    GenderType,
    CommonStatusType,
    CommentType,
    LoginType
} 