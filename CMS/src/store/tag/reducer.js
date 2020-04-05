import { TAG_ADD, TAG_VISIBLE, TAG_DEL, TAG_CHANGETAGS, TAG_SETRECORD } from './constants'
const initState = {
    visible: false,
    // 表格数据
    dataSource: [],
    // 单列信息
    record: {}
}

export default (state = initState, action) => {
    switch (action.type) {
        case TAG_CHANGETAGS:
            return Object.assign({}, state, { dataSource: action.data })
        case TAG_VISIBLE:
            return { ...state, ...action.data }
        case TAG_SETRECORD:
            return { ...state, ...action.data }
        case TAG_ADD:
            return { ...state, ...action.data }
        case TAG_DEL:
            return { ...state, ...action.data }
        default:
            return state
    }
    return { ...state, ...action.data }
}