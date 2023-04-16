import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section id='home'>
        <h2>Upgrade your knowledge with TutorGuide</h2>
        <p>TutorGuide is an online tutoring platform that connects students with experienced tutors from around the world. With a user-friendly interface and advanced scheduling tools, TutorGuide makes it easy for students to find the perfect tutor for their needs. Our tutors are available 24/7 to provide personalized support and help students achieve their academic goals.</p>
        <div className='btn'>
            <a className='info' href="#">More Information</a>
            <a className='visit' href="#">Visit Tutors</a>
        </div>
    </section>
  )
}

export default Home