import React from 'react'
import Loadable from 'react-loadable'
import App from './App'
import Me from './Me'
import Archives from './Archives'
import Classify from './Classify'
import Home from './Home'
import Detail from './Home/detail'


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
        path: '/',
        key: 'app',
        component: App,
        loadData: App.loadData,
        routes: [
            {
                path: '/me',
                key: 'me',
                component: Me,
            },
            {
                path: '/archives',
                component: Archives,
                loadData: Archives.loadData
            },
            {
                path: '/home',
                key: 'home',
                exact: true,
                component: Home,
                loadData: Home.loadData
            },
            {
                path: '/classify',
                key: 'classify',
                exact: true,
                component: Classify,
                loadData: Classify.loadData
            },
            
            {
                path: '/detail/:uid',
                key: 'detail',
                exact: true,
                component: Detail,
                loadData: Detail.loadData
            }
        ]
    }
]