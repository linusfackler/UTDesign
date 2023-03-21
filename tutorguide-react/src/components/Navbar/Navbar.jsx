import React from 'react'
import './navbar.css'
import LOGO from '../../assets/torguide.png'

const Navbar = () => {
  return (
    <nav>
        <img src={LOGO}/>
        <div class='navigation'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Appointments</a></li>
                <li><a href="#">Tutors</a></li>
                <li><a href="#">Profile</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar