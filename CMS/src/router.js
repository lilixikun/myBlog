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