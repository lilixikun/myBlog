import store from 'good-storage'
import { USER_SAVE_INFO, USER_CHANGE_STATE } from './constants'


const initState = {
    userInfo: {},
    isLogin: store.get('token', false)
}

export default (state = initState, action) => {
    switch (action.type) {
        case USER_CHANGE_STATE:
            state.isLogin = action.data;
            return { ...state }
        case USER_SAVE_INFO:
            state.userInfo = action.data
            return { ...state }
        default:
            return state
    }
}