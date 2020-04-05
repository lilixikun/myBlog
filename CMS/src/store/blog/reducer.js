import { BLOG_VISIBLE, BLOG_CHANGBLOGSORTS, BLOG_CREATE, BLOG_DEL, BLOG_SETRECORD } from './constants'

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
        case BLOG_VISIBLE:
            return { ...state, ...action.data }
        case BLOG_CHANGBLOGSORTS:
            return { ...state, ...action.data }
        case BLOG_CREATE:
            return { ...state, ...action.data }
        case BLOG_SETRECORD:
            return { ...state, ...action.data }
        case BLOG_DEL:
            break;
        default:
            return state
    }
}