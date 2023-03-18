import { Layout } from 'antd'
import React from 'react'
import { siderStyle } from './handler'
import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
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
  ];
  const rootSubmenuKeys = ['dashboard', 'doctors', 'patients'];
  const [openKeys, setOpenKeys] = useState(['dashboard']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Layout.Sider style={siderStyle}>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          height: '100%',
        }}
        items={items}
      />
    </Layout.Sider>

  )
}

export default Sidebar