import { Space, Table, Tag } from 'antd';
import { MoreOutlined } from '@ant-design/icons'
const TableUser = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Action',
      render: (_, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      phone: '1234567891',
      email: 'user1@gmail.com',
      
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      phone: '1234567891',
      email: 'user1@gmail.com',
      
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      phone: '1234567891',
      email: 'user1@gmail.com',
      
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      phone: '1234567891',
      email: 'user1@gmail.com',
      
    },
  ];
  const onChange = (pagination, sorter, extra) => {
    console.log('params', pagination, sorter, extra);
  };
  return (
    <Table columns={columns} dataSource={data} onChange={onChange}/>
  )
}

export default TableUser