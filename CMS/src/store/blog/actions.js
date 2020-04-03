import { BLOG_VISIBLE, BLOG_CHANGBLOGSORTS, BLOG_CREATE, BLOG_DEL, BLOG_SETRECORD } from './constants'
import { getBlogSorts, createBlog, delBlog } from "../../request/api"

export const getBlogList = data => {

    return dispatch => {
        getBlogSorts().then(data => {
            let dataSource = data && data.msg;
            dispatch(changeBlogSorts({ dataSource }))
        })
    }
}

export const changeBlogSorts = data => ({
    type: BLOG_CHANGBLOGSORTS,
    data
})

export const changeVisible = data => ({
    type: BLOG_VISIBLE,
    data
})

export const changeRecord = data => ({
    type: BLOG_SETRECORD,
    data
})

export const addBlog = data => {
    return dispatch => {
        createBlog(data).then(res => {
            if (res.errorCode === 200) {
                dispatch(getBlogList())
            }
        })
        dispatch(changeVisible({ visible: false }))
    }
}

export const removeBlog = data => {
    return dispatch => {
        delBlog(data).then(res => {

        }).catch()
    }
}