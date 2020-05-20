import { HOME_GETTAG, HOME_GETBLOGLIST, HOME_HOT_LIST, HOME_BLOG_DETAIL, HOME_COUNT } from './constants'

const initState = {
    hotList: [],
    tagList: [],
    blogList: {
        count: 2,
        rows: []
    },
    detail: {},
    count: 0
}

export default (state = initState, actions) => {
    switch (actions.type) {

        case HOME_COUNT:
            return {
                ...state,
                count: actions.payload.count
            }

        case HOME_GETTAG:
            return {
                ...state,
                tagList: actions.payload
            }
        case HOME_BLOG_DETAIL:
            return {
                ...state,
                detail: actions.payload
            }
        case HOME_HOT_LIST:
            return {
                ...state,
                hotList: actions.payload
            }
        case HOME_GETBLOGLIST:
            let rows = state.blogList.rows
            let newRows = rows.concat(actions.payload.rows)
            let count = actions.payload.count

            let blogList = {
                rows: newRows,
                count
            }

            return {
                ...state,
                blogList: blogList
            }
        default:
            return state
    }
}