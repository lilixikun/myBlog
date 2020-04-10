import React from 'react'
import Loadable from 'react-loadable';
import { Spin } from 'antd';
import { Redirect } from 'react-router-dom';

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
        path: '/',
        component: LoadableComponent(() => import('./App')),
        routes: [
            {
                path: '/me',
                component: Users
            },
            {
                path: '/blogSort/list',
                exact: true,
                component: LoadableComponent(() => import('./page/home/bolgSort'))
            },
            {
                path: '/about',
                component: About
            },
            {
                path: '/blog/list',
                exact: true,
                component: LoadableComponent(() => import('./page/home/blog'))
            },
            {
                path: '/blog/form/:uid',
                exact: true,
                component: LoadableComponent(() => import('./page/home/blog/Form'))
            },
            {
                page: '/tag/list',
                exact: true,
                component: LoadableComponent(() => import('./page/home/tag'))
            }
        ]
    },
    {
        page: '*',
        component: LoadableComponent(() => import('./page/result/NoFound'))
    }
]

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}