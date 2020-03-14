import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import getElemHTML from './index'

const app = express()
app.use(express.static('public'))

// 设置代理服务器
// app.use('/api', createProxyMiddleware({
//     target: '',
//     changeOrigin: true
// }))

app.get('*', (req, res) => {

    const html = getElemHTML(req, res)

    res.send(html)
})

app.listen('8082')