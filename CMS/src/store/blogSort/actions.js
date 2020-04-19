import { BLOG_SORT_VISIBLE, BLOG_SORT_CHANGBLOGSORTS, BLOG_SORT_SETRECORD,BLOG_SORT_CHANGLISTS } from './constants'
import { getBlogSorts, createBlogSort, delBlogSort, findAllSorts } from "../../request/api"


export const findAllSort = () => {
    return dispatch => {
        findAllSorts().then(res => {
            let list = res && res.data;
            dispatch(changeSortList(list))
        })
    }
}

export const getBlogSortList = data => {
    return dispatch => {
        getBlogSorts(data).then(res => {
            let dataSource = res && res.data;
            dispatch(changeBlogSorts({ dataSource }))
        })
    }
}

export const changeSortList = data => ({
    type: BLOG_SORT_CHANGLISTS,
    data
})

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
            if (res.code === 200) {
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
            if (res.code === 200) {
                console.log(11111111111);

                setTimeout(() => {
                    dispatch(getBlogSortList())
                }, 1000);
            }
        }).catch()
    }
}