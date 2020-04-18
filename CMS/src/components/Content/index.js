import React from 'react'
import { Layout } from "antd"

const { Content } = Layout;

function Index(props) {
    return (
        <Content>
            <div className="site-layout-background">
                {props.children}
            </div>
        </Content>
    )
}

export default Index