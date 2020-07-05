import App from './App'
import Me from './Me'
import Archives from './Archives'
import Tag from './Tag'
import Classify from './Classify'
import Home from './Home'
import Detail from './Home/detail'

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
                path: '/tag',
                key: 'tag',
                exact: true,
                component: Tag,
                loadData: Tag.loadData
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