import React from 'react'
import Loadable from 'react-loadable';

const LoadableComponent = (loader) => {
    return Loadable({
        loader,
        loading() {
            return <div>正在加载</div>
        },
    });
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
                path: '/home',
                component: Home
            },
            {
                path: '/about',
                component: About
            }
        ]
    }
]

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}