import { BLOG_SORT_VISIBLE, BLOG_SORT_CHANGBLOGSORTS, BLOG_SORT_CREATE, BLOG_SORT_SETRECORD } from './constants'

let initState = {
    visible: false,
    // 表格数据
    dataSource: [],
    // 单列信息
    record: {
        status: 1,
        clickCount: 100,
        sort: 1
    }
}
export default (state = initState, action) => {
    switch (action.type) {
        case BLOG_SORT_VISIBLE:
            return { ...state, ...action.data }
        case BLOG_SORT_CHANGBLOGSORTS:
            return { ...state, ...action.data }
        case BLOG_SORT_CREATE:
            return { ...state, ...action.data }
        case BLOG_SORT_SETRECORD:
            return { ...state, ...action.data }
        default:
            return state
    }
}