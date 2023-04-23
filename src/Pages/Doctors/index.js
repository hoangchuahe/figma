import DoctorCard from 'Component/DoctorCard'
import './style.scss';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const Doctors = () => {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/edit')
  }
  return (
    <>
      <div className='nav'>
        <div><p style={{fontSize:'25px'}}>Doctors</p></div>
        <div><Button type="primary" style={{fontSize:'16px'}} onClick={handleClick}>Add Doctor</Button></div>
      </div>
      <DoctorCard />
    </>

  )
}

export default Doctors