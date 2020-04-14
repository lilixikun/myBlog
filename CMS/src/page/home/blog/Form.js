import React from "react"
import { connect } from "react-redux"
import { Form, Input, Button, Radio, InputNumber, Card, Row, Col, Select } from "antd"
import { CheckOutlined, SyncOutlined, LeftOutlined } from '@ant-design/icons';
import BraftEditor from "../../../components/Editor/Braft"
import SimpleMDE from "../../../components/Editor/Simplemde"
import { layout, largeLayout } from "../../utils"
import { addBlog } from '../../../store/blog/actions'
import './index.less'

const { Option } = Select

function Add(props) {
    const [form] = Form.useForm();
    const { record, disabled, tagList, blogSortList } = props
    const { createBlog } = props

    const onFinish = (values) => {
        //values.content = values.content.toHTML()
        createBlog(values)
    }

    const onReset = () => form.resetFields()
    const onBack = () => props.history.goBack()

    return (
        <Card>
            <Form form={form} onFinish={onFinish} {...layout} className="blog-form"
                initialValues={{
                    status: true,
                    clickCount: 100,
                    sort: 1,
                    isPublish: true,
                    isOriginal: true,
                    level: 0,
                    collectCount: 0,
                    ...record
                }}
            >
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item
                            label="博客标题"
                            name="title"
                            rules={[{ required: true, message: "请输入博客标题" }]}
                        >
                            <Input placeholder="请输入博客标题" allowClear />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="标签分类" name="tagUid">
                            <Select allowClear>
                                {
                                    tagList.map(item => (<Option value={item.uid} key={item.uid}>{item.tagName}</Option>))
                                }
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="博客分类" name="blogSortUid">
                            <Select allowClear>
                                {
                                    blogSortList.map(item => (<Option value={item.uid} key={item.uid}>{item.sortName}</Option>))
                                }
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="作者"
                            name="author"
                        >
                            <Input allowClear />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label="显示顺序" name="sort">
                            <InputNumber min={1} allowClear />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="点击数" name="clickCount">
                            <InputNumber allowClear />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="收藏数" name="collectCount">
                            <InputNumber allowClear />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="推荐等级" name="level">
                            <InputNumber allowClear />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="状态" name="status">
                            <Radio.Group disabled={disabled}>
                                <Radio value={true}>可用</Radio>
                                <Radio value={false}>禁用</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="是否原创" name="isOriginal">
                            <Radio.Group disabled={disabled}>
                                <Radio value={true}>是</Radio>
                                <Radio value={false}>否</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="是否发布" name="isPublish">
                            <Radio.Group disabled={disabled}>
                                <Radio value={true}>是</Radio>
                                <Radio value={false}>否</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form.Item label="图标图片" name="fileUid" {...largeLayout}>
                            <Input allowClear allowClear />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form.Item label="文章出处" name="articlesPart" {...largeLayout}>
                            <Input allowClear allowClear />
                        </Form.Item>
                    </Col>
                </Row>
                {/* <Row>
                    <Col span={24}>
                        <Form.Item label="博客简介" name="summary" {...largeLayout}>
                            <Input.TextArea allowClear maxLength={255} allowClear placeholder="最多可输入250字" />
                        </Form.Item>
                    </Col>
                </Row> */}
                <Row>
                    <Col span={24}>
                        <Form.Item
                            label="内容"
                            name="content"
                            {...largeLayout}
                            rules={[{
                                required: true,
                                validateTrigger: "onBlur",
                                whitespace: true,
                                // validator: (rule, value) => value.isEmpty() ? Promise.reject("请输入正文内容") : Promise.resolve()
                            }]}
                        >
                            <SimpleMDE />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item name="uid" style={{ display: "none" }}>
                    <Input type="hidden" />
                </Form.Item>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit" icon={<CheckOutlined />}>确定</Button>
                        <Button type="danger" onClick={onReset} icon={<SyncOutlined />} style={{ margin: '0 8px' }}>重置</Button>
                        <Button onClick={onBack} icon={<LeftOutlined />} style={{ marginLeft: 8 }}>返回</Button>
                    </Col>
                </Row>
            </Form>

        </Card>
    )
}

const mapStateToProps = ({ blog, tag, blogSort }) => ({
    disabled: blog.disabled,
    record: blog.record,
    tagList: tag.dataSource,
    blogSortList: blogSort.dataSource
})

const mapDispatchToProps = (dispatch) => {
    return {
        createBlog: date => dispatch(addBlog(date))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Add)