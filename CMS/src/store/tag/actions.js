import { TAG_CHANGETAGS, TAG_VISIBLE, TAG_SETRECORD, BLOG_TAG_CHANGLIST } from './constants'
import { getTags, createTag, delTag, findAllTags } from '../../request/api'


export const findTagList = () => {
    return dispatch => {
        findAllTags().then(res => {
            let list = res && res.data;
            dispatch(changeTagList(list))
        })
    }
}

export const getTagList = data => {
    return dispatch => {
        getTags(data).then(res => {
            let dataSource = res && res.data;
            dispatch(changeTags(dataSource))
        })
    }
}

export const changeTagList = data => ({
    type: BLOG_TAG_CHANGLIST,
    data
})

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