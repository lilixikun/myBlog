import React, { Fragment } from 'react'
import { renderRoutes } from 'react-router-config'
import withStyles from 'isomorphic-style-loader/withStyles'
import Header from './component/Header'
import Footer from './component/Footer'
import BackTop from './component/BackTop'
import styles from './App.less'

const App = (props) => {
    const { route } = props
    return (
        <Fragment>
            <div className='layout'>
                <Header {...props} />
                <div className='main'>
                    {renderRoutes(route.routes)}
                    <BackTop />
                </div>
                <Footer />
            </div>
        </Fragment>
    )
}

export default withStyles(styles)(App)
