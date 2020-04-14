import React from 'react'
import { Layout } from "antd"
import { renderRoutes } from 'react-router-config'
const { Content } = Layout;

export default function Index(props) {
    return (
        <Content>
            <div className="site-layout-background">
                {renderRoutes(props.route.routes)}
            </div>
        </Content>
    )
}