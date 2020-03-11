import express from 'express'
import getElemHTML from './index'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
    console.log(1111111111);

    const html = getElemHTML(req, res)
    console.log(html);

    res.send(html)
})

app.listen('8082')