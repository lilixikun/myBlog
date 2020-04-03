import React, { useEffect } from "react"
import { Form, Input, Button, Table, Card, Popconfirm, Row, Badge } from "antd"
import { PlusOutlined, DatabaseOutlined, DownloadOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { changeVisible, removeBlog, getBlogList, changeRecord } from '../../../store/blog/actions'
import Add from "./Add"
import { buttonItemLayout } from "../../utils"

function List(props) {

    const columns = [
        {
            title: '分类名称',
            dataIndex: 'sortName',
            key: 'sortName'
        },
        {
            title: '点击数',
            dataIndex: 'clickCount',
            key: 'clickCount',
        },
        {
            title: '状态',
            key: 'status',
            dataIndex: 'status',
            render: (status) => status ? <Badge status="success" text="启动" /> : <Badge status="erros" text="禁用" />
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
                    <a onClick={() => updateBlog(record)}>修改</a>
                    <Popconfirm title="确定删除吗?" okText="确定" cancelText="取消" onConfirm={() => onDelByUid(record.uid)}>
                        <a style={{ color: '#a61d24', marginLeft: 16 }}>删除</a>
                    </Popconfirm>
                </span>
            ),
        },
    ];

    const [form] = Form.useForm();
    const { dataSource } = props

    let { setVisible, removeBlogByUid, findAll, setRecord } = props

    useEffect(() => {
        if (dataSource.length === 0) {
            findAll();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onFinish = values => { }

    const reset = () => form.resetFields()

    const add = () => setVisible({ visible: true })

    const updateBlog = (record) => {
        console.log(record);
        setVisible({ visible: true })


        setRecord({ record })
    }
    const onCancel = () => setVisible({ visible: false })
    const onDelByUid = uid => removeBlogByUid(uid)
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
                <Table rowKey="uid" dataSource={dataSource} columns={columns} bordered size="middle" pagination={false} />
            </div>
            <Add />
        </Card>
    )
}

const mapStateToProps = ({ blog }) => ({
    visible: blog.visible,
    dataSource: blog.dataSource
})

const mapDispatchToProps = (dispatch) => {
    return {
        setVisible: (visible) => dispatch(changeVisible(visible)),
        removeBlogByUid: uid => dispatch(removeBlog(uid)),
        findAll: () => dispatch(getBlogList()),
        setRecord: record => dispatch(changeRecord(record))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(List))