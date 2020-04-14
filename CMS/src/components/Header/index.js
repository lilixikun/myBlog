import React from 'react'
import { Layout, Dropdown, Menu, Row } from "antd"
import { UserOutlined } from '@ant-design/icons';
const { Header } = Layout;

export default function Index(props) {

    const menu = (
        <Menu onClick={() => props.history.push('/account/settings')}>
            <Menu.Item>
                <a  href="/account/settings">
                    个人中心
                </a>
            </Menu.Item>
        </Menu>
    );


    return (
        <Header className="site-layout-background">
            <Row justify="end" align="middle" style={{ height: "100%" }}>
                <Dropdown overlay={menu}>
                    <UserOutlined style={{ fontSize: 16, color: "#fff" }} />
                </Dropdown>
            </Row>
        </Header>
    )
}

