import React from 'react'
import { Radio, Card, Typography } from 'antd'
import store from 'good-storage'
const { Title } = Typography;

function Index(props) {

    // 设置富文本类型
    const radioChange = e => store.set('RichType', e.target.value)

    return (
        <Card>
            <Title>常用编辑器</Title>
            <Radio.Group defaultValue={1} onChange={radioChange}>
                <Radio value={0}>富文本</Radio>
                <Radio value={1}>Markdown</Radio>
            </Radio.Group>
        </Card>
    )
}

export default Index