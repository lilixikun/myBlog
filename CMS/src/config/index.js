
export const menuData = [
    {
        menuName: '分类管理',
        path: '/sort',
        key: '/sort',
        icon: 'SyncOutlined',
        children: [
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
        children: [
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
        children: [
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


