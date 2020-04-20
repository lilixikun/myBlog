import React from 'react'
import Loadable from 'react-loadable'
import App from '../src/App'
import Me from '../src/Me'
import Hello from '../src/Hello'
import Home from '../src/Home'


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
        component: LoadableComponent(() => import('../src/App')),
        routes: [
            {
                path: '/me',
                component: LoadableComponent(() => import('../src/Me')),
            },
            {
                path: '/home',
                component: LoadableComponent(() => import('../src/Home')),
            },
            {
                path: '/hello',
                component: LoadableComponent(() => import('../src/Hello')),
            }
        ]
    }
]