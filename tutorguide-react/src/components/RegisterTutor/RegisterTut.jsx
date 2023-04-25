import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './registertut.css'

const RegisterTut = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  // const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setIsFirstNameValid(event.target.value !== '');
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setIsLastNameValid(event.target.value !== '');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(event.target.value !== '');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsPasswordValid(event.target.value !== '');
  };

  // const handleFileChange = (event) => {
  //   setFile(URL.createObjectURL(event.target.files[0]));
  //   console.log(file)
  // };

  const handleFormSubmit = async (event) => {
      event.preventDefault();
      
      const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
      const firstName = document.getElementsByName("fname")[0].value;
      const lastName = document.getElementsByName("lname")[0].value;
      const times = document.getElementsByName("times")[0].value;
      const aboutme = document.getElementsByName("aboutme")[0].value;
      const picture = document.getElementsByName("pic")[0].value;
      const subjects = document.getElementsByName("subjects")[0].value;
      const email = document.getElementsByName("email")[0].value;
      
      if (firstName === '' || lastName === '' || email === '' || times === '' || aboutme === '' || subjects === '') {
          alert("Please fill out all fields.");
          return;
      }

      const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailPattern.test(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      if (!passwordPattern.test(password)) {
          alert("Password must be at least 8 characters long, contain one number and one special character.");
          return;
      }

      const instance = axios.create({baseURL: 'http://localhost:8080'});

      instance.post('/tutors', {
          first_name: firstName,
          last_name: lastName,
          available_times: times,
          about_me: aboutme,
          image: picture,
          subjects: subjects,
          password: password,
          email: email,
          appointments: 0
      })
      .then(function(response) {
          console.log(response)
      })
      .catch(function (error) {
          console.log(error)
      });
      setPassword('');
      var allInputs = document.querySelectorAll('input');
      allInputs.forEach(singleInput => singleInput.value = '');
      alert("Thank you for registering with TutorGuide! You will be redirected to the login page now.")
      navigate('/login', { replace: true })
    }

  return (
    <section id='reg-student'>
            <h1>Welcome to TutorGuide</h1>
    
            <div className='register-container'>
                <h2>Tutor Registration</h2>
    
                <label htmlFor="uname"><b>First Name</b></label>
                <input type="text" name='fname' placeholder='Enter First Name' required />
    
                <label htmlFor="uname"><b>Last Name</b></label>
                <input type="text" name='lname' placeholder='Enter Last Name' required />

                <label htmlFor="uname"><b>Available Times</b></label>
                <input type="text" name='times' placeholder='2:00, 5:00, 6:00, ...' required />

                <label htmlFor="uname"><b>About Me</b></label>
                <textarea name="aboutme" rows="3" placeholder='Enter anything you want the students to know about you!' required></textarea>

                <label htmlFor="uname"><b>Upload profile picture</b></label>
                {/* <input type="file" name='pic' accept='image/' onChange={handleFileChange} /> */}
                <input type="text" name='pic' placeholder='Paste image URL' required />

                <label htmlFor="uname"><b>Subjects</b></label>
                <input type="text" name='subjects' placeholder='Math, Computer Science, ...' required />
    
                <label htmlFor="uname"><b>Email</b></label>
                <input type="email" name='email' placeholder='Enter Email' required />
    
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required onChange={handlePasswordChange} />
    
                <button type="submit" onClick={handleFormSubmit}>Register</button>
                {/* ============CHECK IF EMAIL IS ALREADY IN USE=============== */}
            </div>
        </section>
  )
}

export default RegisterTut