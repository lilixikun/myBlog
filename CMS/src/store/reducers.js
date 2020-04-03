import { combineReducers } from "redux"
import { reducer as blogReducer } from "./blog"
import { reducer as tagReducer } from "./tag"


export default combineReducers({
    blog: blogReducer,
    tag: tagReducer
})
