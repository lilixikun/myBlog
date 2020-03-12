import * as constants from './constants'

export const Login = data => ({
    type: constants.USER_LOGIN,
    data
})

export const getInfo = () => ({
    type: constants.USER_GETINFO
})