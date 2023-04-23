import { Space, Table, Tag } from 'antd';
import { MoreOutlined } from '@ant-design/icons'

const TableSchedule = () => {
  const columns = [
    {
      title: 'Doctor Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <div>{text}</div>,
    },
    {
      title: 'Available Days	',
      dataIndex: 'day',
      key: 'day',
    },
    {
      title: 'Available Time	',
      key: 'time',
      dataIndex: 'time',
      render: (text) => <div>{text}</div>,
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, { status }) => (
        <>
          {status.map((tag) => {
            let color = 'green';
            if (tag === 'Inactive') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
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
      day: '30 Dec 2018',
      time: '10:00am - 11:00am',
      status: ['Active'],
    },
    {
      key: '2',
      name: 'John Brown',
      age: 32,
      day: '30 Dec 2018',
      time: '10:00am - 11:00am',
      status: ['Inactive'],
    },
    {
      key: '3',
      name: 'John Brown',
      age: 32,
      day: '30 Dec 2018',
      time: '10:00am - 11:00am',
      status: ['Inactive'],
    },
  ]
  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default TableSchedule