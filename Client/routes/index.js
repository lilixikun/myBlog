import App from '../src/App'
import Me from '../src/Me'
import Hello from '../src/Hello'
import Home from '../src/Home'

export default [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/me',
                component: Me
            },
            {
                path: '/home',
                component: Home
            },
            {
                path: '/hello',
                component: Hello
            }
        ]
    }
]