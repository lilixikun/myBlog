import React from 'react'
import Loadable from 'react-loadable'
import App from './App'
import Me from './Me'
import Hello from './Hello'
import Home from './Home'


const LoadableComponent = (loader) => {
    return Loadable({
        loader,
        loading() {
            return (<div>Loading ...</div>)
        }
    })
}

export default [
    {
        path: '*',
        component: App,
        routes: [
            {
                path: '/me',
                component: Me,
            },
            {
                path: '/home',
                component: Home,
            },
            {
                path: '/filing',
                component: Hello,
            }
        ]
    }
]