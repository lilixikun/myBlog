import { combineReducers } from "redux"
import { reducer as blogSortReducer } from "./blogSort"
import { reducer as tagReducer } from "./tag"
import { reducer as blogReducer } from "./blog"

export default combineReducers({
    blogSort: blogSortReducer,
    tag: tagReducer,
    blog: blogReducer
})
