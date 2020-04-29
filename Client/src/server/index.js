import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { matchRoutes } from 'react-router-config';
import routes from '../shared/containers/Routers'
import { getServerStore } from '../shared/store'
import reder from './utils'

const app = express()
app.use(express.static('public'))

app.use('/api', createProxyMiddleware({ target: 'http://localhost:7001', changeOrigin: true }));


app.get('*', (req, res) => {
    const store = getServerStore(req);
    const matchedRoutes = matchRoutes(routes, req.path);
    const promises = [];
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            const promise = new Promise((resolve) => {
                item.route
                    .loadData(store, item.match.params)
                    .then(resolve)
                    .catch(resolve);
            });
            promises.push(promise);
        }
    })

    Promise.all(promises).then(() => {
        const html = reder(store, req, res)
        res.send(html)
    })
})

app.listen('8082')