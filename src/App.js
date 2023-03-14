import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};


function App() {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sidebar />
        <Layout.Content style={contentStyle}><Outlet /></Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
