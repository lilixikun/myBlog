import React, { Fragment } from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { renderToString } from 'react-dom/server'

import routers from '../routes'
import { getServerStore } from '../store'

export default (req, res) => {

    const context = {
        css: []
    }
    const ele = renderToString(
        <Provider store={getServerStore()}>
            <StaticRouter location={req.url} context={context}>
                <Fragment>{renderRoutes(routers)}</Fragment>
            </StaticRouter>
        </Provider>
    )


    const cssStr = context.css.length ? context.css.join("\n") : ''
    console.log(cssStr);
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document111</title>
        <style>${cssStr}</style>
        
        </head>

        <body>
            <div id="root">${ele}</div>
            <script src="/index.js"></script>
        </body>
        </html>
    `
}