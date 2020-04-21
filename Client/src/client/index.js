import React, { PureComponent, Fragment, } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import StyleContext from 'isomorphic-style-loader/StyleContext';

import routers from '../shared/containers/Routers'
import { getClienStore } from '../shared/store'


const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss())
    return () => removeCss.forEach(dispose => dispose())
}

const App = () => {
    return (
        <StyleContext.Provider value={{ insertCss }}>
            <Provider store={getClienStore()}>
                <BrowserRouter>
                    <Fragment>{renderRoutes(routers)}</Fragment>
                </BrowserRouter>
            </Provider>
        </StyleContext.Provider>
    )
}

ReactDOM.hydrate(<App />, document.getElementById('root'))
