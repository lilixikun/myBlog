import React, { Fragment } from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './component/Header'
import Footer from './component/Footer'
import styles from './App.css'

const App = (props) => {
    const { route } = props
    return (
        <div className={styles.layout}>
            <Header />
            <main>
                {renderRoutes(route.routes)}
            </main>
            <Footer />
        </div>
    )
}

export default App
