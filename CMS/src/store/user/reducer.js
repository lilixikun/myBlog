import { USER_SAVE_INFO } from './constants'

const initState = {
    userInfo: {}
}

export default (state = initState, action) => {
    switch (action.type) {
        case USER_SAVE_INFO:
            state.userInfo = action.data
            return { ...state }
        default:
            return state
    }
}