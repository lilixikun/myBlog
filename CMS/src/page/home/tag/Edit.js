import React from "react"
import { connect } from "react-redux"
import { Modal, Form, Input, Button, Radio, InputNumber, Space } from "antd"
import { CheckOutlined, SyncOutlined } from '@ant-design/icons';
import { layout, tailLayout } from "../../utils"
import { changeVisible } from '../../../store/blog/actions'

function Add(props) {
    const [form] = Form.useForm();
    const { visible } = props
    const { setVisible } = props

    const onCancel = () => setVisible({ visible: false })

    const onFinish = (values) => {
        console.log(values)
    }
    const onReset = () => form.resetFields()
    return (
        <Modal visible={visible} onCancel={onCancel} footer={null}>
            <Form form={form} layout="horizontal" onFinish={onFinish} {...layout}
                initialValues={{
                    status: 1,
                    clickCount: 100,
                    sort: 1
                }}
            >
                <Form.Item
                    label="标签名称"
                    name="tagName"
                    rules={[{ required: true, message: "请输入标签名称" }]}
                >
                    <Input placeholder="请输入标签名称" />
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
                <Form.Item label="标签简介" name="content">
                    <Input.TextArea autoSize maxLength={255} allowClear placeholder="最多可输入250字" />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Space>
                        <Button type="primary" htmlType="submit" icon={<CheckOutlined />}>确定</Button>
                        <Button type="danger" onClick={onReset} icon={<SyncOutlined />}>重置</Button>
                    </Space>
                </Form.Item>
            </Form>
        </Modal>
    )
}

const mapStateToProps = ({ blog }) => ({
    visible: blog.visible
})

const mapDispatchToProps = (dispatch) => {
    return {
        setVisible: (visible) => dispatch(changeVisible(visible))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Add)