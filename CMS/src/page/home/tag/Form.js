import React from "react"
import { connect } from "react-redux"
import { Modal, Form, Input, Button, Radio, InputNumber } from "antd"
import { CheckOutlined, SyncOutlined } from '@ant-design/icons';
import { layout, tailLayout } from "../../utils"
import { changeVisible, addTag } from '../../../store/tag/actions'

function Add(props) {
    const [form] = Form.useForm();
    const { visible, record } = props
    const { setVisible, createTag } = props

    const onCancel = () => setVisible({ visible: false, record: {} })

    const onFinish = (values) => createTag(values)
    const onReset = () => form.resetFields()
    return (
        <Modal visible={visible} onCancel={onCancel} footer={null}>
            <Form form={form} layout="horizontal" onFinish={onFinish} {...layout}
                initialValues={{
                    status: true,
                    clickCount: 100,
                    sort: 1,
                    ...record
                }}
            >
                <Form.Item name="uid" style={{ display: "none" }}>
                    <Input type="hidden" />
                </Form.Item>
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
                        <Radio value={true}>可用</Radio>
                        <Radio value={false}>禁用</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="图标名称" name="img">
                    <Input allowClear placeholder="图标名称" />
                </Form.Item>
                <Form.Item label="标签简介" name="content">
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

const mapStateToProps = ({ tag }) => ({
    visible: tag.visible,
    record: tag.record
})

const mapDispatchToProps = (dispatch) => {
    return {
        setVisible: (visible) => dispatch(changeVisible(visible)),
        createTag: data => dispatch(addTag(data))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Add)