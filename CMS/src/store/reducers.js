import {combineReducers} from "redux"
import { reducer as blogReducer } from "../store/blog"

const reducers = combineReducers({
    blog: blogReducer
})

export default reducers