import { get, post, del } from './http'

// 获取博客分类列表
export const getBlogSorts = parms => get('/blogSort/findAll', parms)
// 添加博客
export const createBlog = data => post('/blogSort/create', data)
// 删除博客
export const delBlog = uid => del(`/blogSort/del/${uid}`)

// 获取标签分类列表
export const getTags = parms => get('/tag/findAll', parms)
// 添加标签
export const createTag = data => post('/tag/create', data)
// 删除标签
export const delTag = uid => del(`/tag/del/${uid}`)