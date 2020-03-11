import React, { Fragment } from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './component/Header'
import Footer from './component/Footer'

const App = (props) => {
    const { route } = props
    return (
        <div>
            <Header />
            <Fragment>{renderRoutes(route.routes)}</Fragment>
            <Footer />
        </div>
    )
}

export default App
