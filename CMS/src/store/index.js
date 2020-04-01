import { createStore, applyMiddleware } from 'redux'
import saga from 'redux-saga'
import reducers from './reducers'

const store = createStore(
    reducers,
    applyMiddleware(saga)
)

export default store