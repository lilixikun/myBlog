import * as constants from './constants'

const chanegState = (type, payload) => ({
    type,
    payload
})

export const getCount = () => (dispatch, getState, axios) => axios.get('/blog/findCount').then(res => {
    dispatch(chanegState(constants.HOME_COUNT, res.data.data))
})

export const getBlogList = (params = {}) => (dispatch, getState, axios) => axios.get('/blog/findAndCountAll', { params }).then(res => {
    dispatch(chanegState(constants.HOME_GETBLOGLIST, res.data.data))
})

export const getBlogListByTagId = (params = {}) => (dispatch, getState, axios) => axios.get('/blog/findByTag', { params }).then(res => {
    dispatch(chanegState(constants.HOME_GETBLOGLIST, res.data.data))
})

export const getTagDetail = (uid) => (dispatch, getState, axios) => axios.get(`/tag/findByUid/${uid}`).then(res => {
    dispatch(chanegState(constants.HOME_BLOG_DETAIL, res.data.data))
})

export const getTagList = () => (dispatch, getState, axios) => axios.get('/tag/findHotTag').then(res => {
    dispatch(chanegState(constants.HOME_GETTAG, res.data.data))
})

export const getHotBlog = () => (dispatch, getState, axios) => axios.get('/blog/findHotBlog').then(res => {
    dispatch(chanegState(constants.HOME_HOT_LIST, res.data.data))
})

export const getBlogDetail = (uid) => (dispatch, getState, axios) => axios.get(`/blog/findByUid/${uid}`).then(res => {
    dispatch(chanegState(constants.HOME_BLOG_DETAIL, res.data.data))
})
