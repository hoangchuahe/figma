import DoctorCard from 'Component/DoctorCard'
import './style.scss';
import { Button } from 'antd';
const Doctors = () => {
  return (
    <>
      <div className='nav'>
        <div><p style={{fontSize:'25px'}}>Doctors</p></div>
        <div><Button type="primary" style={{fontSize:'16px'}}>Add Doctor</Button></div>
      </div>
      <DoctorCard />
    </>

  )
}

export default Doctors