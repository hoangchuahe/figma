import React from 'react'
import { Card, Col, Row } from 'antd';
import './style.scss'
const DoctorCard = () => {
  const listData = [
    {
      name: 'Cristina Groves',
      staff: 'Gynecologist',
      address: 'United States, San Francisco',
    },
    {
      name: 'Cristina Groves',
      staff: 'Gynecologist',
      address: 'United States, San Francisco',
    },
    {
      name: 'Cristina Groves',
      staff: 'Gynecologist',
      address: 'United States, San Francisco',
    },
  ]
  return (
    <Row gutter={16}>
      {listData.map((data, i) => (
        <Col span={6} key={i}>
          <Card className='doctor-card'>
            <div className='avatar'>
              <img src='https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg' alt='qwe' />
            </div>
            <div className='name'>{data.name}</div>
            <div className='staff'>{data.staff}</div>
            <div className='address'>{data.address}</div>

          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default DoctorCard