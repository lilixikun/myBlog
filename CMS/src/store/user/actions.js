import { USER_GET_INFO } from './constants'
import { userLogin, userLogout, findUserInfo } from '../../request/api'

export const login = data => {
    return dispatch => {
        userLogin(data).then(res => {
            if (res && res.errorCode === 200) {
                // 跳转到首页
            }
        })
    }
}

export const changeUserInfo = data => ({
    type: USER_GET_INFO,
    data
})

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