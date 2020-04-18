import React from "react"
import { Form, Input, Button, Checkbox } from 'antd';
import store from 'good-storage'
import { connect } from "react-redux";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { userLogin } from '../../request/api'
import { changeLoginState, logOut } from '../../store/user/actions'
import './index.less'


function Login(props) {

    const onFinish = async values => {
        if (values.remember) {
            store.set('userName', values.userName)
            try {
                const res = await userLogin(values)
                if (res.code === 200) {
                    store.set('token', res.data)
                    props.setLoginState(true)
                    const { from } = props.location.state || { from: { pathname: '/sort/list' } }
                    props.history.push(from.pathname)
                }
            } catch (error) {
                props.useLogOut()
            }
        }
    }

    return (
        <div className="login_page">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true, type: 200 }}
                onFinish={onFinish}
            >
                <Form.Item name="type" style={{ display: 'none' }}></Form.Item>
                <Form.Item
                    name="userName"
                    rules={[{ required: true, message: '请输入账号!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} allowClear />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        allowClear
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox className='remember'>记住账号</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setLoginState: state => dispatch(changeLoginState(state)),
        useLogOut: () => dispatch(logOut())
    }
}



export default connect(null, mapDispatchToProps)(React.memo(Login))