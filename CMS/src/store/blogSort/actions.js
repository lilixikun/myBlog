import { BLOG_SORT_VISIBLE, BLOG_SORT_CHANGBLOGSORTS, BLOG_SORT_SETRECORD } from './constants'
import { getBlogSorts, createBlogSort, delBlogSort } from "../../request/api"

export const getBlogSortList = data => {

    return dispatch => {
        getBlogSorts().then(res => {
            let dataSource = res && res.msg;
            dispatch(changeBlogSorts({ dataSource }))
        })
    }
}

export const changeBlogSorts = data => ({
    type: BLOG_SORT_CHANGBLOGSORTS,
    data
})

export const changeVisible = data => ({
    type: BLOG_SORT_VISIBLE,
    data
})

export const changeRecord = data => ({
    type: BLOG_SORT_SETRECORD,
    data
})

export const addBlogSort = data => {
    return dispatch => {
        createBlogSort(data).then(res => {
            if (res.errorCode === 200) {
                setTimeout(() => {
                    dispatch(getBlogSortList())
                }, 1000);
            }
        })
        dispatch(changeVisible({ visible: false }))
    }
}

export const removeBlogSort = data => {
    return dispatch => {
        delBlogSort(data).then(res => {
            if (res.errorCode === 200) {
                console.log(11111111111);

                setTimeout(() => {
                    dispatch(getBlogSortList())
                }, 1000);
            }
        }).catch()
    }
}