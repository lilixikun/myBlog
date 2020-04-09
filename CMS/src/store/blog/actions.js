import { BLOG_VISIBLE, BLOG_CHANGBLOGSORTS, BLOG_SETRECORD } from './constants'
import { getBlogs, createBlog, delBlog } from "../../request/api"

export const getBlogList = data => {

    return dispatch => {
        getBlogs().then(res => {
            let dataSource = res && res.msg;
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
            if (res.errorCode === 200) {
                dispatch(getBlogList())
            }
        }).catch()
    }
}