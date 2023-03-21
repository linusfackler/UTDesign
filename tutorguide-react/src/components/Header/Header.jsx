import React from 'react'
import './Header.css'
import LOGO from '../../assets/torguide.png'

const Header = () => {
  return (
    <body>
		<div id="content-container" >
			<div id="_bg__header"  ></div>
			<div id="rectangle_1"  ></div>
			<div id="home" >
				Home
			</div>
			<div id="appointments" >
				Appointments
			</div>
			<img src={LOGO} id="torguide" />
			<div id="tutors" >
				Tutors
			</div>
			<div id="profile" >
				Profile
			</div>

			
		</div>
	</body>
  )
}

export default Header