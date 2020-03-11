import App from '../src/index'
import Me from '../src/Me'
import Hello from '../src/Hello'

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
                path: '/hello',
                component: Hello
            }
        ]
    }
]