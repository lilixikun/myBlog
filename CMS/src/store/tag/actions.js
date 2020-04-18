import { TAG_CHANGETAGS, TAG_VISIBLE, TAG_SETRECORD } from './constants'
import { getTags, createTag, delTag } from '../../request/api'

export const getTagList = data => {
    return dispatch => {
        getTags(data).then(res => {
            let dataSource = res && res.data;
            dispatch(changeTags(dataSource))
        })
    }
}

const changeTags = data => ({
    type: TAG_CHANGETAGS,
    data
})

export const changeVisible = data => ({
    type: TAG_VISIBLE,
    data
})

export const changeRecord = data => ({
    type: TAG_SETRECORD,
    data
})

export const addTag = data => {
    return dispatch => {
        createTag(data).then(res => {
            if (res && res.code === 200) {
                dispatch(getTagList())
            }
            dispatch(changeVisible({ visible: false }))
        })

    }
}

export const removeTag = data => {
    return dispatch => {
        delTag(data).then(res => {
            if (res && res.code === 200) {
                dispatch(getTagList())
            }
        })
    }
}