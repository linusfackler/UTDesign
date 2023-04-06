import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>

      <ul className='permalinks'>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/login">Appointments</Link></li>
        <li><Link to = "/tutors">Tutors</Link></li>
        <li><Link to = "/login">Profile</Link></li>
      </ul>
    </footer>
  )
}

export default Footer