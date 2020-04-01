export const menus = [
    {
        menuName: '分类管理',
        path: '/blog/list',
        key: '0',
        icon: 'SyncOutlined',
        subMenu: [
            {
                menuName: '类别管理',
                path: '/blog/list',
                key: '0-0',
                icon: 'SyncOutlined'
            },
            {
                menuName: '标签管理',
                path: '/menu/path',
                key: '0-1',
                icon: 'SyncOutlined'
            }
        ]
    },
    {
        menuName: '博客管理',
        path: '/blog',
        key: '1',
        icon: 'home',
        subMenu: [
            {
                menuName: '文章管理',
                path: '/blog/list',
                key: '1-1',
                icon: 'blog'
            }
        ]
    },
    {
        menuName: '统计',
        path: '/stat',
        key: '2',
        subMenu: [
            {
                menuName: '用户',
                path: '/stat/user',
                key: '2-1'
            },
            {
                menuName: '文章统计',
                path: '/stat/book',
                key: '2-2'
            }
        ]
    }
]