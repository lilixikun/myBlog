import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Layout, Menu } from 'antd';

import { ShopOutlined, UserOutlined } from '@ant-design/icons';

import { menus } from '../../config'
const { Sider } = Layout;

const Index = (props) => {
    let [collapsed, setCollapsed] = useState(false)

    let onCollapse = collapsed => setCollapsed(collapsed)

    const renderMenu = (menuData) => {
        return (
            menuData.map(menu => {
                if (menu.subMenu && menu.subMenu.length) {
                    return <Menu.SubMenu key={menu.key} title={
                        <span>
                            <ShopOutlined />
                            <span>{menu.menuName}</span>
                        </span>
                    }>
                        {renderMenu(menu.subMenu)}
                    </Menu.SubMenu>
                } else {
                    return (<Menu.Item key={menu.key}>
                        <UserOutlined />
                        <Link to={menu.path}><span className="nav-text">{menu.menuName}</span></Link>
                    </Menu.Item>)
                }
            })
        )
    }

    return (<Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
        }}
    >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            {renderMenu(menus)}
        </Menu>
    </Sider>)
}

export default Index