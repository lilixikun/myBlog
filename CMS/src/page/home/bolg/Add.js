import React from "react"
import {connect} from "react-redux"
import { Modal, Form, Input, Button, Radio, InputNumber } from "antd"
import { CheckOutlined, SyncOutlined } from '@ant-design/icons';
import { layout, tailLayout } from "../../utils"

function Add(props) {
    const { onCancel, visible } = props
    const [form] = Form.useForm();
    const cancel = () => onCancel()

    const onFinish = (values) => { console.log(values)
    }
    const onReset = () => form.resetFields()
    return (
        <Modal visible={visible} onCancel={cancel} footer={null}>
            <Form form={form} layout="horizontal" onFinish={onFinish} {...layout}
                initialValues={{
                    status: 1,
                    clickCount: 100,
                    sort: 1
                }}
            >
                <Form.Item
                    label="分类名称"
                    name="blogName"
                    rules={[{ required: true, message: "请输入博客分类名称" }]}
                >
                    <Input placeholder="请输入博客分类名称" />
                </Form.Item>
                <Form.Item label="显示顺序" name="sort">
                    <InputNumber min={1} />
                </Form.Item>
                <Form.Item label="点击数" name="clickCount">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="状态" name="status">
                    <Radio.Group>
                        <Radio value={1}>可用</Radio>
                        <Radio value={0}>禁用</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="分类简介" name="content">
                    <Input.TextArea autoSize maxLength={255} allowClear />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" icon={<CheckOutlined />}>确定</Button>
                    <Button type="danger" onClick={onReset} icon={<SyncOutlined />}>重置</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

const mapStateToProps=(state)=>{
    console.log(state);
    return {}
}

export default connect(mapStateToProps,null)(Add)