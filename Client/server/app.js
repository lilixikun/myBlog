import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Header from '../src/component/Header'
import Footer from '../src/component/Footer'
const app = express()
app.use(express.static('public'))

const App = () => (
    <div>
        <Header />
        <Footer />
    </div>
)

const ele = renderToString(App())

app.get('/', (req, res, next) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">

        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>

        <body>
            ${ele}
        </body>

        </html>
    `)
})

app.listen('8082')