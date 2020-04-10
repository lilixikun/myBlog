import React from 'react'
import { Result, Button } from 'antd';

function NoFound(props) {
    const goHome = () => props.history.push('/')
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={goHome}>Back Home</Button>}
        />
    )
}

export default NoFound