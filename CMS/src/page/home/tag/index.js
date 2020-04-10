import React from "react"
import { Form, Input, Button, Popconfirm, Badge } from "antd"
import { connect } from "react-redux";
import { changeVisible, getTagList, removeTag, changeRecord } from '../../../store/tag/actions'
import BaseTable from '../../../components/BsseTable'
import TagForm from './Form'
import { buttonItemLayout } from "../../utils"

function List(props) {

    const columns = [
        {
            title: '标签名称',
            dataIndex: 'tagName',
            key: 'tagName',
            render: text => <a>{text}</a>,
            sorter: (a, b) => a.tagName.length - b.tagName.length,
        },
        {
            title: '点击数',
            dataIndex: 'clickCount',
            key: 'clickCount',
            sorter: (a, b) => a.clickCount - b.clickCount
        },
        {
            title: '状态',
            key: 'status',
            dataIndex: 'status',
            render: (status) => status ? <Badge status="success" text="启动" /> : <Badge status="error" text="禁用" />
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
                    <a onClick={() => onUpdateTag(record)}>修改</a>
                    <Popconfirm title="确定删除吗?" okText="确定" cancelText="取消" onConfirm={() => onDelByUid(record.uid)}>
                        <a style={{ color: '#a61d24', marginLeft: 16 }}>删除</a>
                    </Popconfirm>
                </span>
            ),
        },
    ];


    const [form] = Form.useForm();
    const { dataSource, visible } = props
    let { setVisible, setRecord, findAll, removeTagByUid } = props

    const onUpdateTag = record => {
        setVisible({ visible: true })
        setRecord({ record })
    }

    const onFinish = values => findAll()
    const onReset = () => form.resetFields()
    const onAdd = () => setVisible({ visible: true, record: {} })
    const onDelByUid = uid => removeTagByUid(uid)

    return (
        <BaseTable
            columns={columns}
            dataSource={dataSource}
            onAdd={onAdd}
        >
            <Form form={form} layout="inline" onFinish={onFinish}>
                <Form.Item label="标签名称" name="blogName">
                    <Input placeholder="请输入标签名称" />
                </Form.Item>
                <Form.Item label="状态" name="status">
                    <Input placeholder="请选择状态" />
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="primary" htmlType="submit">确定</Button>
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="danger" onClick={onReset}>重置</Button>
                </Form.Item>
            </Form>

            {
                visible ? <TagForm /> : null
            }
        </BaseTable>
    )
}

const mapStateToProps = ({ tag }) => ({
    visible: tag.visible,
    dataSource: tag.dataSource
})

const mapDispatchToProps = (dispatch) => {
    return {
        setVisible: (visible) => dispatch(changeVisible(visible)),
        setRecord: record => dispatch(changeRecord(record)),
        findAll: data => dispatch(getTagList(data)),
        removeTagByUid: uid => dispatch(removeTag(uid))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(List))