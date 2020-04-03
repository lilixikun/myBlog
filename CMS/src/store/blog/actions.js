import { BLOG_VISIBLE, BLOG_ADD, BLOG_DEL } from './constants'

export const changeVisible = data => ({
    type: BLOG_VISIBLE,
    data
})

export const blogAdd = data => ({
    type: BLOG_ADD,
    data
})

export const bolgDel = data => ({
    type: BLOG_DEL,
    data
})