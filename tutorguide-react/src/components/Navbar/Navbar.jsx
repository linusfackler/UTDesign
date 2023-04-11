import React from 'react'
import './navbar.css'
import LOGO from '../../assets/torguide.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to = "/"><img src={LOGO}/></Link>
        <div className='navigation'>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/login">Appointments</Link></li>
                <li><Link to = "/tutors">Tutors</Link></li>
                <li><Link to = "/login">Profile</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar