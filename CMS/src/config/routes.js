import React from 'react'
import Loadable from 'react-loadable';
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
        path: '/login',
        component: LoadableComponent(() => import('../page/user/index'))
    },
    {
        path: '/',
        component: LoadableComponent(() => import('../App')),
        requiresAuth: false,
        routes: [
            {
                path: '/sort/list',
                exact: true,
                requiresAuth: true,
                component: LoadableComponent(() => import('../page/home/bolgSort'))
            },
            {
                path: '/blog/list',
                exact: true,
                requiresAuth: true,
                component: LoadableComponent(() => import('../page/home/blog'))
            },
            {
                path: '/blog/form/look/:uid',
                exact: true,
                component: LoadableComponent(() => import('../page/home/blog//Look'))
            },
            {
                path: '/blog/form/:uid',
                exact: true,
                component: LoadableComponent(() => import('../page/home/blog/Form'))
            },
            {
                path: '/account/settings',
                exact: true,
                component: LoadableComponent(() => import('../page/user/settings'))
            },
            {
                path: '/sort/tag',
                exact: true,
                component: LoadableComponent(() => import('../page/home/tag'))
            },
            {
                path: '*',
                component: LoadableComponent(() => import('../page/result/NoFound')),
                requiresAuth: false
            }
        ]
    },
    {
        path: '*',
        component: LoadableComponent(() => import('../page/result/NoFound')),
        requiresAuth: false
    }
]
