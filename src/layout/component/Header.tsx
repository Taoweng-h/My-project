import { useNavigate } from 'react-router-dom'

import { Menu, Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'

function Header() {
  const navigate = useNavigate() //允许使用编程式导航

  function logout() {
    navigate('/login', { replace: true })
  }

  const menu = (
    <Menu
      onClick={logout}
      items={[
        {
          label: '退出',
          key: '0'
        }
      ]}
    />
  )
  return (
    <div className="header">
      <div className="logo">logo</div>
      <Dropdown overlay={menu} trigger={['click']} className="head-dropdown">
        <a onClick={e => e.preventDefault()}>
          <Space>
            click me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  )
}

export default Header
