import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Dropdown, Menu, Row } from "antd"
import { UserOutlined } from '@ant-design/icons';
const { Header } = Layout;

export default function Index(props) {

    const menu = (
        <Menu>
            <Menu.Item>
                <Link to="/account/settings">
                    个人中心
                </Link>
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

