import React from 'react'
import './logins.css'

const Logins = () => {
  return (
    <section id='logins'>
        <h1>Welcome to TutorGuide</h1>

        <div className='login-container'>

          { /*================= STUDENT LOGIN ================= */ }
          <div className='login-student'>
            <h2>Student Login</h2>

            <label for="uname"><b>Email</b></label>
            <input type="email" name='email' placeholder='Enter Email' required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <label className='remember-me'>
              <input type="checkbox" name="remember"/> Remember me
            </label>
            <button type="submit">Login</button>
            <h5>Don't have an account? Register here!</h5>
          </div>



          { /*================= TUTOR LOGIN ================= */ }
          <div className='login-tutor'>
            <h2>Tutor Login</h2>

            <label for="uname"><b>Email</b></label>
            <input type="email" name='email' placeholder='Enter Email' required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <label className='remember-me'>
              <input type="checkbox" name="remember"/> Remember me
            </label>
            <button type="submit">Login</button>
            <h5>Don't have an account? Register here!</h5>
          </div>


        </div>
    </section>
  )
}

export default Logins