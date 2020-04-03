import { TAG_ADD, TAG_VISIBLE, TAG_DEL } from './constants'


export const changeVisible = data => ({
    type: TAG_VISIBLE,
    data
})

export const addTag = data => ({
    type: TAG_ADD,
    data
})

export const delTag = data => ({
    type: TAG_DEL,
    data
})