import React, { PureComponent } from 'react'
import NProgress from 'nprogress'
import { Spin } from 'antd'

const style = {
    position: "flexd",
    top: '100px',
    margin: "20px auto",
    width: "50%",
    height: "50%",
    textAlign: "center",
    padding: "30px 50px"
}

export default class Loading extends PureComponent {
    componentWillMount() {
        NProgress.start()
    }

    componentWillUnmount() {
        NProgress.done()
    }

    render() {
        return (<div style={{ ...style }}>
            <Spin size="large" />
        </div>)
    }
}