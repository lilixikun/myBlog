import * as constants from './constants'

const chanegState = (type, payload) => ({
    type,
    payload
})


export const getTagList = () => (dispatch, getState, axios) => axios.get('/tag/findAll').then(res => {
    dispatch(chanegState(constants.CLASSIFY_LIST, res.data.data))
})