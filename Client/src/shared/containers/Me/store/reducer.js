import { USER_LOGIN, USER_GETINFO } from './constants'

const initState = {
    isLogin: false
}

export default (state = initState, actions) => {
    switch (actions.type) {
        case USER_LOGIN:

            break;
        case USER_GETINFO:
            break
        default:
            return state
    }
}