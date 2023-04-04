import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Appointments</a></li>
        <li><a href="#">Tutors</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
    </footer>
  )
}

export default Footer