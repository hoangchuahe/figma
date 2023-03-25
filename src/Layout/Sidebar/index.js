import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { siderStyle } from './handler';
const Sidebar = () => {
  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Dashboard', 'dashboard', <MailOutlined />,),
    getItem('Doctors', 'doctors', <AppstoreOutlined />,),
    getItem('Patients', 'patients', <SettingOutlined />,),
    getItem('Edit Doctor', 'edit', <MailOutlined />,),

  ];

  const navigate = useNavigate()

  const onClick = (e) => {
    navigate(e.key)
  };
  return (
    <Layout.Sider style={siderStyle}>
      <Menu
        onClick={onClick}
        mode="inline"
        style={{
          height: '100%',
        }}
        items={items}
      />
    </Layout.Sider>

  )
}

export default Sidebar