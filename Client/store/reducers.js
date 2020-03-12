import { combineReducers } from 'redux'
import { reducer as userReducer } from '../src/Me/store'
import { reducer as homeReducer } from '../src/Home/store'

const reducers = combineReducers({
    user: userReducer,
    home: homeReducer
})

export default reducers