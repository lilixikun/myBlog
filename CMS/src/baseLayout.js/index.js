import React from "react"
import { Layout } from "antd"
import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"
import Sider from "../components/Sider"

export default function App(props) {
    return (
        <Layout>
            <Sider />
            <Layout className="site-layout">
                <Header />
                <Content {...props} />
                <Footer />
            </Layout>
        </Layout >
    )
}