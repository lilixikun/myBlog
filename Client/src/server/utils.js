import React, { Fragment } from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { minify } from 'html-minifier';
import StyleContext from 'isomorphic-style-loader/StyleContext'

import routers from '../shared/containers/Routers'

export default (store, req, res) => {

    const context = {
        css: []
    }

    const css = new Set() // CSS for all rendered React components
    const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))

    const ele = renderToString(
        <StyleContext.Provider value={{ insertCss }}>
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <Fragment>{renderRoutes(routers)}</Fragment>
                </StaticRouter>
            </Provider>
        </StyleContext.Provider>

    )

    const helmet = Helmet.renderStatic()

    const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
        <link rel="stylesheet" href="/index.css">
        <style>${[...css].join('')}</style>
      
        </head>

        <body>
            <div id="root">${ele}</div>
            <script>
                window.REDUX_STORE = ${JSON.stringify(store.getState())};
            </script>
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