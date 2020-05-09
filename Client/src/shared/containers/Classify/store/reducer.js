import { CLASSIFY_LIST } from './constants'

const initState = {
    dataList: []
}

export default (state = initState, actions) => {
    switch (actions.type) {
        case CLASSIFY_LIST:
            return {
                ...state,
                dataList: actions.payload
            }
        default:
            return state
    }
}