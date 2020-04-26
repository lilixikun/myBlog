import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

// 区分环境，注入对应的axios，保持客户端请求node中间层，而node请求真实的接口。
import clientAxios from '../../client/request';
import serverAxios from '../../server/request';

// 每一次调用返回一个新的store，避免服务器端所有人都引用的同一个对象
export const getServerStore = (req) => {
    const middleWares = thunk.withExtraArgument(serverAxios(req));
    return createStore(
        reducers,
        applyMiddleware(middleWares)
    )
}

export const getClienStore = () => {

    // 如果服务器端已经产生了数据，就作为默认store使用 也就是脱水操作
    const defaultStore = window.REDUX_STORE || {};

    return createStore(
        reducers,
        defaultStore,
        applyMiddleware(thunk.withExtraArgument(clientAxios))
    )
}