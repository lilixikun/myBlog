import { combineReducers } from 'redux'
import { reducer as archivesReduct } from '../containers/Archives/store'
import { reducer as homeReducer } from '../containers/Home/store'

const reducers = combineReducers({
    archives: archivesReduct,
    home: homeReducer
})

export default reducers