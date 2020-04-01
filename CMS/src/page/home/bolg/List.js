import React, { useState } from "react"
import { Form, Input, Button, Table, Card, Popconfirm, Row, Modal } from "antd"
import { PlusOutlined, DatabaseOutlined, DownloadOutlined } from '@ant-design/icons';
import Add from "./Add"
import { buttonItemLayout } from "../../utils"

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
function List(props) {

    const columns = [
        {
            title: '分类名称',
            dataIndex: 'sortName',
            key: 'sortName',
            render: text => <a>{text}</a>,
        },
        {
            title: '点击数',
            dataIndex: 'clickCount',
            key: 'clickCount',
        },
        {
            title: '状态',
            key: 'status',
            dataIndex: 'status'
        },
        {
            title: '创建时间',
            key: 'createTime',
            dataIndex: 'createTime'
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a>修改</a>
                    <Popconfirm title="确定删除吗?" okText="确定" cancelText="取消">
                        <a style={{ color: '#a61d24', marginLeft: 16 }}>删除</a>
                    </Popconfirm>
                </span>
            ),
        },
    ];

    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false)
    const onFinish = values => {
        console.log(values);
    }

    const reset = () => {
        form.resetFields()
    }

    const add = () => setVisible(true)
    const onCancel = () => setVisible(false)

    return (
        <Card>
            <Form form={form} layout="inline" onFinish={onFinish}>
                <Form.Item label="分类名称" name="blogName">
                    <Input placeholder="请输入博客名称" />
                </Form.Item>
                <Form.Item label="状态" name="status">
                    <Input placeholder="请选择状态" />
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="primary" htmlType="submit">确定</Button>
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="danger" onClick={reset}>重置</Button>
                </Form.Item>
            </Form>
            <Row justify="end">
                <PlusOutlined style={{ fontSize: 16 }} onClick={add} />
                <DatabaseOutlined style={{ fontSize: 16 }} />
                <DownloadOutlined style={{ fontSize: 16 }} />
            </Row>
            <div style={{ marginTop: 8 }}>
                <Table dataSource={data} columns={columns} bordered size="middle" pagination={false} />
            </div>
            <Add visible={visible} onCancel={onCancel} />
        </Card>
    )
}
export default List