import React from 'react'
import Loadable from 'react-loadable';
import { Redirect } from "react-router-dom"
import { Spin } from 'antd';

const style = {
    position: "flexd",
    top: '100px',
    margin: "20px auto",
    width: "50%",
    height: "50%",
    textAlign: "center",
    padding: "30px 50px"
}
const LoadableComponent = (loader) => {
    return Loadable({
        loader,
        loading() {
            return <div style={{ ...style }}>
                <Spin size="large" />
            </div>
        }
    })
}


export default [
    {
        path: '/404',
        component: LoadableComponent(() => import('./page/result/NoFound'))
    },
    {
        path: '/',
        component: LoadableComponent(() => import('./App')),
        routes: [
            {
                path: '/me',
                component: Users,
                exact: true
            },
            {
                path: '/blogSort/list',
                component: LoadableComponent(() => import('./page/home/bolgSort')),
                exact: true
            },
            {
                path: '/about',
                component: About,
                exact: true
            },
            {
                path: '/blog/list',
                component: LoadableComponent(() => import('./page/home/blog')),
                exact: true
            },
            {
                page: '/tag/list',
                component: LoadableComponent(() => import('./page/home/tag')),
                exact: true
            }
        ]
    }
]

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}