import React from "react"
import { connect } from "react-redux"
import { Modal, Form, Input, Button, Radio, InputNumber, Space } from "antd"
import { CheckOutlined, SyncOutlined } from '@ant-design/icons';
import { layout, tailLayout } from "../../utils"
import { changeVisible, addBlog } from '../../../store/blog/actions'

function Add(props) {
    const [form] = Form.useForm();
    const { visible, record } = props
    const { setVisible, createBlog } = props

    const onCancel = () => setVisible({ visible: false, record: {} })

    const onFinish = (values) => {
        createBlog(values)
        console.log(values)
    }
    const onReset = () => form.resetFields()
    console.log(record);

    return (
        <Modal visible={visible} onCancel={onCancel} footer={null} destroyOnClose>
            <Form form={form} layout="horizontal" onFinish={onFinish} {...layout}
                initialValues={record}
            >
                <Form.Item name="uid" style={{ display: "none" }}>
                    <Input type="hidden" />
                </Form.Item>
                <Form.Item
                    label="分类名称"
                    name="sortName"
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
                    <Input.TextArea autoSize maxLength={255} allowClear placeholder="最多可输入250字" />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" icon={<CheckOutlined />} style={{ marginRight: 8 }}>确定</Button>
                    <Button type="danger" onClick={onReset} icon={<SyncOutlined />}>重置</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

const mapStateToProps = ({ blog }) => ({
    visible: blog.visible,
    record: blog.record
})

const mapDispatchToProps = (dispatch) => {
    return {
        setVisible: (visible) => dispatch(changeVisible(visible)),
        createBlog: date => dispatch(addBlog(date))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Add)