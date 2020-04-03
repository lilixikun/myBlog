import { TAG_ADD, TAG_VISIBLE, TAG_DEL } from './constants'

const initState = {
    visible: false,
    dataList: [1, 2]
}

export default (state = initState, action) => {
    switch (action.type) {
        case TAG_VISIBLE:

            return { ...state, ...action.data }

        case TAG_ADD:
            break
        case TAG_DEL:
            break
        default:
            return state
    }
}