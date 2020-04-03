import React, { useState } from "react"
import { Form, Input, Button, Table, Card, Popconfirm, Row } from "antd"
import { PlusOutlined, DatabaseOutlined, DownloadOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import numeral from "numeral"
import { changeVisible } from '../../../store/blog/actions'
import Edit from './Edit'
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
            title: '标签名称',
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

    console.log(numeral(133342.2243332).format("0,0.000000"));


    var number = numeral(0.1);
    console.log(number.add(0.2)._value);

    const [form] = Form.useForm();

    let { setVisible } = props
    const onFinish = values => {
        console.log(values);
    }

    const reset = () => {
        form.resetFields()
    }

    const add = () => setVisible({ visible: true })
    const onCancel = () => setVisible({ visible: false })

    return (
        <Card>
            <Form form={form} layout="inline" onFinish={onFinish}>
                <Form.Item label="标签名称" name="blogName">
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
            <Edit />
        </Card>
    )
}

const mapStateToProps = ({ tag }) => ({
    visible: tag.visible,
    dataList: tag.dataList
})

const mapDispatchToProps = (dispatch) => {
    return {
        setVisible: (visible) => dispatch(changeVisible(visible))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(List))