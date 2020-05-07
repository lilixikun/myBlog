import * as constants from './constants'

const chanegState = (type, payload) => ({
    type,
    payload
})


export const getTimeLineList = () => (dispatch, getState, axios) => axios.get('/blog/orderByTime').then(res => {
    dispatch(chanegState(constants.ARCHIVE_LIST, res.data.data))
})