import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import TutorOverview from './components/TutorOverview/TutorOverview'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Tutors from './components/Tutors/Tutors'

const App = () => {
  return (
    <>
        <Navbar/>
        <Home/>
        <TutorOverview/>
        <Footer/>
    </>
  )
}

export default App