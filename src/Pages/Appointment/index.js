import TableAppointment from 'Component/TableAppointment'
import TableUser from 'Component/TableUser'
import React from 'react'
import { Button } from 'antd'
import 'style.scss'
const Appointments = () => {
  return (
    <>
    <div className='nav'>
        <div><p style={{fontSize:'25px'}}>Appointments</p></div>
        <div><Button type="primary" style={{fontSize:'16px'}}>Add appointment</Button></div>
      </div>
      <TableAppointment />
    </>
   
  )
}

export default Appointments