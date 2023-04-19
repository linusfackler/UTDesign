import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import RegisterStu from '../components/RegisterStudent/RegisterStu'
import Footer from '../components/Footer/Footer'

const RegisterStudent = () => {
  return (
    <section>
      <Navbar/>
      <RegisterStu/>
      <Footer/>
    </section>
  )
}

export default RegisterStudent