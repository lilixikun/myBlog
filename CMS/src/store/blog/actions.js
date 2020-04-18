import { BLOG_VISIBLE, BLOG_CHANGBLOGSORTS, BLOG_SETRECORD } from './constants'
import { getBlogs, createBlog, delBlog } from "../../request/api"

export const getBlogList = data => {

    return dispatch => {
        getBlogs().then(res => {
            let dataSource = res && res.data;
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
            if (res.code === 200) {
                dispatch(getBlogList())
                window.history.back(-1)
            }
        })
    }
}

export const removeBlog = data => {
    return dispatch => {
        delBlog(data).then(res => {
            if (res.errorCode === 200) {
                setTimeout(() => dispatch(getBlogList()), 1000);
            }
        }).catch()
    }
}