import { combineReducers } from 'redux'
// import { reducer as userReducer } from '../..//store'
import { reducer as homeReducer } from '../containers/Home/store'

const reducers = combineReducers({
    //user: userReducer,
    home: homeReducer
})

export default reducers