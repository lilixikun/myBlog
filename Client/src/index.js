import React, { PureComponent, Fragment, } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Header from './component/Header'
import Footer from './component/Footer'
import routers from '../routes'

class App extends PureComponent {

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Fragment>{renderRoutes(routers)}</Fragment>
                <Footer />
            </BrowserRouter>
        )
    }
}

ReactDOM.hydrate(<App />, document.getElementById('root'))
