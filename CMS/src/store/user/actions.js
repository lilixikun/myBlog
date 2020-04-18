import store from 'good-storage'
import { USER_GET_INFO, USER_CHANGE_STATE } from './constants'
import { userLogout, findUserInfo } from '../../request/api'

export const changeUserInfo = data => ({
    type: USER_GET_INFO,
    data
})


export const changeLoginState = data => ({
    type: USER_CHANGE_STATE,
    data
})


export const logOut = () => {
    store.remove('token')
    return dispatch => dispatch(changeLoginState(false))
}

export const getUserInfo = () => {
    return dispatch => {
        findUserInfo().then(res => {
            if (res && res.errorCode === 200) {
                dispatch(changeUserInfo(res.msg))
            }
        })
    }
}

export const logout = () => {
    return dispatch => {
        userLogout().then(res => {
            if (res && res.errorCode === 200) {
                // 跳转到登录页
            }
        })
    }
}