import React, { PureComponent, Fragment, } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routers from '../shared/containers/Routers'
import { getClienStore } from '../shared/store'

const App = () => {
    return (
        <Provider store={getClienStore()}>
            <BrowserRouter>
                <Fragment>{renderRoutes(routers)}</Fragment>
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.hydrate(<App />, document.getElementById('root'))
