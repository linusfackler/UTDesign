import React from 'react'
import './Header.css'
import LOGO from '../../assets/torguide.png'
import STOCK1 from '../../assets/stock1.png'
import STOCK2 from '../../assets/stock2.png'
import STOCK3 from '../../assets/stock3.png'
import STOCK4 from '../../assets/stock4.png'

const Header = () => {
  return (
    <body>
		<div id="content-container" >
			<div id="_bg__header"  ></div>
			<div id="rectangle_1"  ></div>
			<img src={LOGO} id="torguide" />
			<div id="home" >
				Home
			</div>
			<div id="tutors" >
				Tutors
			</div>
			<div id="profile" >
				Profile
			</div>
			<div id="appointments" >
				Appointments
			</div>
			<div id="rectangle_2"  ></div>
			<div id="rectangle_6"  ></div>
			<div id="rectangle_7"  ></div>
			<div id="tutor_awards_and_recognition" >
				Tutor Awards and Recognition
			</div>
			<div id="scandal__1" >
				Scandal #1
			</div>
			<div id="news" >
				News
			</div>

			<div id="group_1"  >
				<div id="rectangle_2_ek1"  ></div>
				<div id="tutors_ek1" >
					Tutors
				</div>
				<div id="rectangle_6_ek1"  ></div>
				<div id="linda_mccartney_science__math_it_is_a_long_established_fact_that_a_reader_will_be_distracted_by_the_readable_content_of_a_page_when_looking_at_its_layout__the_point_of" >
					Linda McCartney<br/>Science, Math<br/><br/>It is a long established fact that <br/>a reader will be distracted by the <br/>readable content of a page when <br/>looking at its layout. The point of <br/>
				</div>

				<div id="image"  >
					<div id="ellipse_1"  ></div>
					<img src={STOCK2} id="stock2" />

				</div>
				<div id="rectangle_6_ek2"  ></div>
				<div id="patricia_bateman_economics__music_it_is_a_long_established_fact_that_a_reader_will_be_distracted_by_the_readable_content_of_a_page_when_looking_at_its_layout__the_point_of" >
					Patricia Bateman<br/>Economics, Music<br/><br/>It is a long established fact that <br/>a reader will be distracted by the <br/>readable content of a page when <br/>looking at its layout. The point of <br/>
				</div>

				<div id="image_ek1"  >
					<div id="ellipse_7"  ></div>
					<img src={STOCK3} id="stock3" />

				</div>
				<div id="rectangle_6_ek3"  ></div>
				<div id="leonardo_dicaprio_banking__diving_it_is_a_long_established_fact_that_a_reader_will_be_distracted_by_the_readable_content_of_a_page_when_looking_at_its_layout__the_point_of" >
					Leonardo Dicaprio<br/>Banking, Diving<br/><br/>It is a long established fact that <br/>a reader will be distracted by the <br/>readable content of a page when <br/>looking at its layout. The point of
				</div>

				<div id="image_ek2"  >
					<div id="ellipse_9"  ></div>
					<img src={STOCK1} id="stock1" />

				</div>
				<div id="rectangle_6_ek4"  ></div>
				<div id="paul_allen_computer_science__math_it_is_a_long_established_fact_that_a_reader_will_be_distracted_by_the_readable_content_of_a_page_when_looking_at_its_layout__the_point_of" >
					Paul Allen<br/>Computer Science, Math<br/><br/>It is a long established fact that <br/>a reader will be distracted by the <br/>readable content of a page when <br/>looking at its layout. The point of
				</div>

				<div id="image_ek3"  >
					<div id="ellipse_10"  ></div>
					<img src={STOCK4} id="stock4" />

				</div>

			</div>
		</div>
	</body>
  )
}

export default Header