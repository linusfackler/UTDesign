import React from 'react'
import './navbar.css'
import LOGO from '../../assets/torguide.png'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const checkLoginProfile = (e) => {
    var s = localStorage.getItem('student')
    var t = localStorage.getItem('tutor')
    if (s == null && t == null) {
      navigate('/login', { replace: true })
      return
    }
    else if (t === null) {
      navigate('/profile-student', { replace: true })
    }
    else {
      navigate('/profile-tutor', { replace: true })
    }
  }

  const checkLoginAppointments = (e) => {
    var s = localStorage.getItem('student')
    var t = localStorage.getItem('tutor')
    if (s == null && t == null) {
      navigate('/login', { replace: true })
      return
    }
    else if (t === null) {
      navigate('/appointments-student', { replace: true })
    }
    else {
      navigate('/appointments-tutor', { replace: true })
    }
  }

  return (
    <nav>
        <Link to = "/"><img src={LOGO}/></Link>
        <div className='navigation'>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li onClick={checkLoginAppointments}>Appointments</li>
                <li><Link to = "/tutors">Tutors</Link></li>
                <li onClick={checkLoginProfile}>Profile</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar