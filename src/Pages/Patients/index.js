import TableUser from 'Component/TableUser'
import React from 'react'
import { Button } from 'antd'

import './style.scss';
const Patients = () => {
  return (
    <>
    <div className='nav'>
        <div><p style={{fontSize:'25px'}}>Patients</p></div>
        <div><Button type="primary" style={{fontSize:'16px'}}>Add Patient</Button></div>
      </div>
    <TableUser />
    </>
  )
}

export default Patients