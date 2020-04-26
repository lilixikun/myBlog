import { HOME_GETTAG, HOME_GETBLOGLIST, HOME_HOT_LIST, HOME_BLOG_DETAIL } from './constants'

const initState = {
    hotList: [],
    tagList: [],
    blogList: {
        count: 2,
        rows: []
    },
    detail: {}
}

export default (state = initState, actions) => {
    switch (actions.type) {
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
            return {
                ...state,
                blogList: actions.payload
            }
        default:
            return state
    }
}