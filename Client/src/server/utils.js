import React, { Fragment } from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { renderToString } from 'react-dom/server'
import { minify } from 'html-minifier';
import StyleContext from 'isomorphic-style-loader/StyleContext'

import routers from '../shared/containers/Routers'
import { getServerStore } from '../shared/store'

export default (req, res) => {

    const context = {
        css: []
    }

    const css = new Set() // CSS for all rendered React components
    const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))

    const ele = renderToString(
        <StyleContext.Provider value={{ insertCss }}>
            <Provider store={getServerStore()}>
                <StaticRouter location={req.url} context={context}>
                    <Fragment>{renderRoutes(routers)}</Fragment>
                </StaticRouter>
            </Provider>
        </StyleContext.Provider>

    )

    const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document111</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
        <style>${[...css].join('')}</style>
        
        </head>

        <body>
            <div id="root">${ele}</div>
            <script src="/index.js"></script>
        </body>
        </html>
    `
    const minifyHtml = minify(html, {
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
    });
    return minifyHtml;
}