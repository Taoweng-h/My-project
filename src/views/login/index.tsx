import './style/index.scss'

import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { useAppDispatch } from '@/store/hooks'
import { login } from '@/store/modules/user'

import { useNavigate } from 'react-router-dom'

function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const onFinish = (value: User.loginInfo) => {
    dispatch(login(value.userName))
    navigate('/', { replace: true })
  }
  return (
    <div className="login-page">
      <div className="submit-form">
        <div className="title">用 户 登 录</div>
        <div className="form-wrap">
          <Form size="large" onFinish={onFinish}>
            <Form.Item
              name="userName"
              rules={[{ required: true, message: '登录账号不能为空' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="请输入登录账号" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '登录密码不能为空' }]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="请输入登录密码"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" block htmlType="submit">
                登 录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
