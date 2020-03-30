import React from 'react'
import { Layout } from "antd"
import { renderRoutes } from 'react-router-config'
const { Content } = Layout;

export default function Index(props) {
    return (
        <Content style={{ margin: '0 16px', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                {renderRoutes(props.route.routes)}
            </div>
        </Content>
    )
}