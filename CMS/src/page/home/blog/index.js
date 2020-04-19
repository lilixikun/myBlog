import React, { useEffect } from "react"
import { Form, Input, Button, Popconfirm, Badge, Divider, Select } from "antd"
import { connect } from "react-redux";
import { changeVisible, removeBlog, getBlogList, changeRecord } from '../../../store/blog/actions'
import BaseTable from '../../../components/BsseTable'
import { buttonItemLayout } from "../../utils"

const { Option } = Select

function List(props) {

    const columns = [
        {
            title: '博客标题',
            dataIndex: 'title',
            key: 'title',
            render: text => <a>{text}</a>
        },
        {
            title: '点击数',
            dataIndex: 'clickCount',
            key: 'clickCount',
            sorter: (a, b) => a.clickCount - b.clickCount
        },
        {
            title: '收藏数',
            dataIndex: 'collectCount',
            key: 'collectCount',
            sorter: (a, b) => a.collectCount - b.collectCount
        },
        {
            title: '博客分类',
            dataIndex: 'blogSortUid',
            key: 'blogSortUid'
        },
        {
            title: '状态',
            key: 'status',
            dataIndex: 'status',
            render: (status) => status ? <Badge status="success" text="启动" /> : <Badge status="error" text="禁用" />
        },
        {
            title: '作者',
            dataIndex: 'author',
            key: 'author'
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
                    <a onClick={() => goForm(record, `/blog/form/look/${record.uid}`)}>查看</a>
                    <Divider type="vertical" />
                    <a onClick={() => goForm(record, `/blog/form/${record.uid}`)}>修改</a>
                    <Divider type="vertical" />
                    <Popconfirm title="确定删除吗?" okText="确定" cancelText="取消" onConfirm={() => onDelByUid(record.uid)}>
                        <a style={{ color: '#ff7875' }}>删除</a>
                    </Popconfirm>
                </span>
            ),
        },
    ];

    const [form] = Form.useForm();
    const { dataSource, blogSortList } = props

    let { removeBlogByUid, findAll, setRecord, setDisabled } = props

    useEffect(() => {
        if (dataSource.length === 0) {
            findAll();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onFinish = values => findAll()

    const onReset = () => form.resetFields()

    const goForm = (record, path) => {
        setRecord({ record })
        props.history.push(path)
    }

    const onDelByUid = uid => removeBlogByUid(uid)

    return (
        <div>
            <BaseTable
                columns={columns}
                dataSource={dataSource}
                onAdd={() => goForm({}, `/blog/form/add`)}
            >
                <Form form={form} layout="inline" onFinish={onFinish}>
                    <Form.Item label="博客标题" name="title">
                        <Input placeholder="请输入博客标题" allowClear />
                    </Form.Item>
                    <Form.Item label="博客分类" name="blogSortUid">
                        <Select style={{ width: 170 }} allowClear>
                            {
                                blogSortList.map(item => (<Option value={item.uid} key={item.uid}>{item.sortName}</Option>))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item label="作者" name="author">
                        <Input placeholder="请输入作者" allowClear />
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary" htmlType="submit">确定</Button>
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="danger" onClick={onReset}>重置</Button>
                    </Form.Item>
                </Form>
            </BaseTable>
        </div>
    )
}

const mapStateToProps = ({ blog, blogSort }) => ({
    visible: blog.visible,
    dataSource: blog.dataSource,
    blogSortList: blogSort.sortList
})

const mapDispatchToProps = (dispatch) => {
    return {
        setDisabled: disabled => dispatch(changeVisible(disabled)),
        removeBlogByUid: uid => dispatch(removeBlog(uid)),
        findAll: () => dispatch(getBlogList()),
        setRecord: record => dispatch(changeRecord(record))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(List))