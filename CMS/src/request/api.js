import { get, post, del } from './http'

// 用户登录
export const userLogin = data => post('/user/login', data)
//用户退出
export const userLogout = () => get('/user/logout')
// 获取用户信息
export const findUserInfo = () => get('/user/info')

// 查询全部分类
export const findAllSorts = () => get('/blogSort/findAll')
// 获取博客分类列表
export const getBlogSorts = parms => get('/blogSort/findAndCountAll', parms)
// 添加博客
export const createBlogSort = data => post('/blogSort/create', data)
// 删除博客
export const delBlogSort = uid => del(`/blogSort/del/${uid}`)


// 查询全部分类
export const findAllTags = () => get('/tag/findAll')
// 获取标签分类列表
export const getTags = parms => get('/tag/findAndCountAll', parms)
// 添加标签
export const createTag = data => post('/tag/create', data)
// 删除标签
export const delTag = uid => del(`/tag/del/${uid}`)

// 获取博客列表
export const getBlogs = parms => get('/blog/findAndCountAll', parms, true)
// 根据uid查询详情
export const findByUid = uid => get(`/blog/findByUid/${uid}`)
// 添加博客
export const createBlog = data => post('/blog/create', data)
// 删除博客
export const delBlog = uid => del(`/blog/del/${uid}`)