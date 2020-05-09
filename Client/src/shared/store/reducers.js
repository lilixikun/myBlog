import { combineReducers } from 'redux'
import { reducer as archivesReduct } from '../containers/Archives/store'
import { reducer as homeReducer } from '../containers/Home/store'
import { reducer as classifyReducer } from '../containers/Classify/store'

const reducers = combineReducers({
    archives: archivesReduct,
    home: homeReducer,
    classify: classifyReducer
})

export default reducers