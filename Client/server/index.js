import React, { Fragment } from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { renderToString } from 'react-dom/server'

import routers from '../routes'

export default (req, res) => {
    console.log(req.url);

    const context = {}
    const ele = renderToString(
        <StaticRouter location={req.url} context={context}>
            <Fragment>{renderRoutes(routers)}</Fragment>
        </StaticRouter>
    )
    console.log(11);

    console.log(ele);

    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>

        <body>
            <div id="root"></div>
            ${111}
        </body>
        </html>
    `
}