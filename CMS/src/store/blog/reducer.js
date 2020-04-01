import { BOLG_ADD, BLOG_DEL } from './constants'

const initState = {

}
export default (state = initState, actions) => {
    switch (actions.type) {
        case BOLG_ADD:

            break;
        case BLOG_DEL:
            break
        default:
            return state
    }
}