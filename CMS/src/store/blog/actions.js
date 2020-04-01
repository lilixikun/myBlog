import * as constants from './constants'

export const blogAdd = data => ({
    type: constants.BOLG_ADD,
    data
})

export const bolgDel = data => ({
    type: constants.BLOG_DEL,
    data
})