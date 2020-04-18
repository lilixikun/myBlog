import React from 'react'
import { Link } from "react-router-dom"
import memoize from 'memoize-one';
import { Layout, Menu } from 'antd';
import { ShopOutlined, UserOutlined } from '@ant-design/icons';
import { menuData } from '../../config'
import { urlToList, getFlatMenuKeys, getMeunMatchKeys } from '../../page/utils'

const { Sider } = Layout;

class Index extends React.PureComponent {
    constructor(props) {
        super(props)
        this.flatMenuKeys = getFlatMenuKeys(menuData)
        this.state = {
            collapsed: false,
            openKeys: this.getSelectedMenuKeys(this.flatMenuKeys, props.location.pathname)
        }
    }

    renderMenu = (menuData) => {
        // 深度优先遍历
        return (
            menuData.map(menu => {
                if (menu.children && menu.children.length) {
                    return (
                        <Menu.SubMenu key={menu.key} title={
                            <span>
                                <ShopOutlined />
                                <span>{menu.menuName}</span>
                            </span>
                        }>
                            {this.renderMenu(menu.children)}
                        </Menu.SubMenu>
                    )
                }
                return (<Menu.Item key={menu.key}>
                    <UserOutlined />
                    <Link to={menu.path}><span className="nav-text">{menu.menuName}</span></Link>
                </Menu.Item>)
            })
        )
    }

    // 可以赋予普通函数记忆输出结果的功能，它会在每次调用函数之前检查传入的参数是否与之前执行过的参数完全相同，
    // 如果完全相同则直接返回上次计算过的结果，就像常用的缓存一样
    getSelectedMenuKeys = memoize((flatMenuKeys, pathname) => {
        const selectedKeys = getMeunMatchKeys(flatMenuKeys, urlToList(pathname))
        return selectedKeys
    })

    onOpenChange = openKeys => {
        this.setState({ openKeys })
    }

    onCollapse = () => this.setState({
        collapsed: !this.state.collapsed
    })

    render() {

        const { collapsed, openKeys } = this.state
        const { pathname } = this.props.location
        const selectedKeys = this.getSelectedMenuKeys(this.flatMenuKeys, pathname)

        return (<Sider
            collapsible
            collapsed={collapsed}
            onCollapse={this.onCollapse}
            style={{
                // overflow: 'auto',
                // height: '100vh',
                // position: 'fixed',
                // left: 0,
            }}
        >
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={selectedKeys}
                openKeys={openKeys}
                // onClick={onClick}
                onOpenChange={this.onOpenChange}
            >
                {this.renderMenu(menuData)}
            </Menu>
        </Sider>)
    }
}

export default Index