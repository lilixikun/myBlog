import React from "react"
import { Layout, BackTop } from "antd"
import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"
import Sider from "../components/Sider"
import "./index.less"

export default function App(props) {
    return (
        <div>
            <BackTop visibilityHeight={50}>
                <div className="ant-back-top-inner">UP</div>
            </BackTop>
            < Layout>
                <Sider />
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Header />
                    <Content {...props} />
                    <Footer />
                </Layout>
            </Layout >
        </div>
    )
}