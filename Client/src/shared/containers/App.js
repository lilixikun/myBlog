import React, { Fragment } from 'react'
import { renderRoutes } from 'react-router-config'
import withStylesHOC from './component/WithStylesHOC'
import Header from './component/Header'
import Footer from './component/Footer'
import styles from './App.css'

const App = (props) => {
    const { route } = props
    return (
        <div className={styles.layout}>
            <Header {...props} />
            <div className={styles.main}>
                {renderRoutes(route.routes)}
            </div>
            <Footer />
        </div>
    )
}

export default withStylesHOC(App,styles) 
