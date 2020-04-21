import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import reder from './utils'

const app = express()
app.use(express.static('public'))

// app.use(
//     '/api',
//     proxy('http://localhost:7071', {
//         proxyReqPathResolver(req) {
//             return `/api/${req.url}`;
//         },
//     }),
// );

app.get('*', (req, res) => {

    const html = reder(req, res)

    res.send(html)
})

app.listen('8082')