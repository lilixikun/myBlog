import React, { Fragment } from 'react'
import { renderRoutes } from 'react-router-config'
import withStyles from 'isomorphic-style-loader/withStyles'
//import withStylesHOC from './component/WithStylesHOC'
import Header from './component/Header'
import Footer from './component/Footer'
import styles from './App.less'

const App = (props) => {
    const { route } = props
    return (
        <div className='layout'>
            <Header {...props} />
            <div className='main'>
                {renderRoutes(route.routes)}
            </div>
            <Footer />
        </div>
    )
}

export default withStyles(styles)(App)
