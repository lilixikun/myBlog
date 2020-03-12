import { createStore, applyMiddleware } from 'redux'
import saga from 'redux-saga'
import reducers from './reducers'

export function getServerStore() {
    return createStore(
        reducers,
        applyMiddleware(saga)
    )
}

export function getClienStore() {
    return createStore(
        reducers,
        applyMiddleware(saga)
    )
}