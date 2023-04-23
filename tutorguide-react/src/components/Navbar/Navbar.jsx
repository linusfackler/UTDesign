import React from 'react'
import './navbar.css'
import LOGO from '../../assets/torguide.png'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const checkLogin = (e) => {
    var s = localStorage.getItem('student')
    var t = localStorage.getItem('tutor')
    if (s == null && t == null) {
      navigate('/login', { replace: true })
      return
    }
    else if (s != null) {
      navigate('/profile-student', { replace: true })
    }
    else {
      navigate('/profile-tutor', { replace: true })
    }
  }

  return (
    <nav>
        <Link to = "/"><img src={LOGO}/></Link>
        <div className='navigation'>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/login">Appointments</Link></li>
                <li><Link to = "/tutors">Tutors</Link></li>
                {/* <li><Link to = "/login">Profile</Link></li> */}
                <li onClick={checkLogin}>Profile</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar