import React, { useState } from 'react';
import './logins.css';

const Logins = () => {
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    setIsPasswordValid(passwordPattern.test(password));
    if (!isPasswordValid) {
      event.preventDefault();
    }
  };

  return (
    <section id='logins'>
      <h1>Welcome to TutorGuide</h1>

      <div className='login-container'>
        { /*================= STUDENT LOGIN ================= */ }
        <div className='login-student'>
          <h2>Student Login</h2>

          <label htmlFor="uname"><b>Email</b></label>
          <input type="email" name='email' placeholder='Enter Email' required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required onChange={handlePasswordChange} />

          {!isPasswordValid && <p className='error'>Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.</p>}

          <label className='remember-me'>
            <input type="checkbox" name="remember"/> Remember me
          </label>
          <button type="submit" onClick={handleFormSubmit}>Login</button>
          <h5>Don't have an account? Register here!</h5>
        </div>

        { /*================= TUTOR LOGIN ================= */ }
        <div className='login-tutor'>
          <h2>Tutor Login</h2>

          <label htmlFor="uname"><b>Email</b></label>
          <input type="email" name='email' placeholder='Enter Email' required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required onChange={handlePasswordChange} />

          {!isPasswordValid && <p className='error'>Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.</p>}

          <label className='remember-me'>
            <input type="checkbox" name="remember"/> Remember me
          </label>
          <button type="submit" onClick={handleFormSubmit}>Login</button>
          <h5>Don't have an account? Register here!</h5>
        </div>
      </div>
    </section>
  );
};

export default Logins;