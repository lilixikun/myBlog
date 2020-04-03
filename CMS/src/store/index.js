import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers'

// 定义中间件的数组
const middleware = [thunk]

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

export default store