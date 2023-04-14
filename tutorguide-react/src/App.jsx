import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import TutorOverview from './components/TutorOverview/TutorOverview'
import Footer from './components/Footer/Footer'

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