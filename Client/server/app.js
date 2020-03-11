import express from 'express'
import getElemHTML from './index'

const app = express()
app.use(express.static('public'))

app.get('/', (req, res, next) => {
    const html = getElemHTML(req,res)
    console.log(html);

    res.send(`1111111111`)
})

app.listen('8082')