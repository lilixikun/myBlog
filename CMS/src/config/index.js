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
export const menuData = [
    {
        menuName: '分类管理',
        path: '/sort',
        key: '/sort',
        icon: 'SyncOutlined',
        subMenu: [
            {
                menuName: '类别管理',
                path: '/sort/list',
                key: '/sort/list',
                icon: 'SyncOutlined'
            },
            {
                menuName: '标签管理',
                path: '/sort/tag',
                key: '/sort/tag',
                icon: 'SyncOutlined'
            }
        ]
    },
    {
        menuName: '博客管理',
        path: '/blog',
        key: '/blog',
        icon: 'home',
        subMenu: [
            {
                menuName: '文章管理',
                path: '/blog/list',
                key: '/blog/list',
                icon: 'blog'
            }
        ]
    },
    {
        menuName: '统计',
        path: '/stat',
        key: '/stat',
        subMenu: [
            {
                menuName: '用户',
                path: '/stat/user',
                key: '/stat/user'
            },
            {
                menuName: '文章统计',
                path: '/stat/book',
                key: '/stat/book'
            }
        ]
    }
]


export const routes = [
    {
        path: '/user/login',
        component: LoadableComponent(() => import('../page/user/index'))
    },
    {
        path: '/',
        component: LoadableComponent(() => import('../App')),
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
                requiresAuth: true,
                component: LoadableComponent(() => import('../page/home/blog//Look'))
            },
            {
                path: '/blog/form/:uid',
                exact: true,
                requiresAuth: true,
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
                requiresAuth: true,
                component: LoadableComponent(() => import('../page/home/tag'))
            }
        ]
    },
    {
        path: '*',
        component: LoadableComponent(() => import('../page/result/NoFound')),
        requiresAuth: false
    }
]
