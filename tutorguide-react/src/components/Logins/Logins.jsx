import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './logins.css';
import axios from 'axios'
import { Link } from 'react-router-dom'

const Logins = () => {
  const [password, setPassword] = useState('');
  const [apiCalledT, setApiCalledT] = useState(false);
  const [apiCalledS, setApiCalledS] = useState(false);

  const navigate = useNavigate();

  const [selectedTutor, setTutors] = useState([])
  const [selectedStudent, setStudent] = useState([])

  // ================= STUDENT API CALL =================

  const handleFormSubmitStudent = (event) => {
    event.preventDefault();
    const email = document.getElementsByName("emailS")[0].value;
    const pw = document.getElementsByName("pswS")[0].value;

    const instance = axios.create({baseURL: 'http://localhost:8080'});

    if (email === '' || pw === '') {
      alert("Please fill out all fields.");
      return;
    }

    var call = 'students/email/' + email

    instance.get(call)
    .then(res => {
      const selectStudent = res.data;
      if (!selectStudent) {
        alert("Can't find student");
        return;
      }
      setStudent(selectStudent)
      setPassword(pw)
      setApiCalledS(true)
    })
    .catch(error => { 
      alert("Can't find student with this email address.")
    });
  }

  useEffect(() => {
    if (apiCalledS) {
      console.log(selectedStudent)
      if (selectedStudent.password != password) {
        alert("Password is incorrect.")
        setPassword("")
        var pwField = document.getElementsByName('pswS')
        pwField.forEach(singleInput => singleInput.value = '')
        return
      }
      alert("Welcome back, " + selectedStudent.first_name)



      localStorage.setItem('student', JSON.stringify(selectedStudent))
      navigate('/profile-student', { replace: true })
      return
    }
  }, [selectedStudent]);

  // ================= TUTOR API CALL =================

  const handleFormSubmitTutor= async (event) => {
    event.preventDefault();
    const email = document.getElementsByName("emailT")[0].value;
    const pw = document.getElementsByName("pswT")[0].value;

    const instance = axios.create({baseURL: 'http://localhost:8080'});

    if (email === '' || pw === '') {
      alert("Please fill out all fields.");
      return;
    }

    var call = 'tutors/email/' + email

    instance.get(call)
    .then(res => {
      const selectTutor = res.data;
      if (!selectTutor) {
        alert("Can't find tutor");
        return;
      }
      setTutors(selectTutor)
      setPassword(pw)
      setApiCalledT(true)
    })
    .catch(error => { 
      alert("Can't find tutor with this email address.")
    });
    console.log(selectedTutor)
  }

  useEffect(() => {
    if (apiCalledT) {
      if (selectedTutor.password != password) {
        alert("Password is incorrect.")
        setPassword("")
        var pwField = document.getElementsByName('pswT')
        pwField.forEach(singleInput => singleInput.value = '')
        return
      }
      alert("Welcome back, " + selectedTutor.first_name)
      localStorage.setItem('tutor', selectedTutor)
      navigate('/profile-tutor', { replace: true })
      return
    }
  }, [selectedTutor]);

  return (
    <section id='logins'>
      <h1>Welcome Back!</h1>

      <div className='login-container'>
        { /*================= STUDENT LOGIN ================= */ }
        <div className='login-student'>
          <h2>Student Login</h2>

          <label htmlFor="uname"><b>Email</b></label>
          <input type="email" name='emailS' placeholder='Enter Email' required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="pswS" required />

          <button type="submit" onClick={handleFormSubmitStudent}>Login</button>
          <h6><Link to = "/register-tutor">Forgot Password</Link></h6>
          <h5><Link to = "/register-student">Don't have an account? Register here!</Link></h5>
        </div>

        { /*================= TUTOR LOGIN ================= */ }
        <div className='login-tutor'>
          <h2>Tutor Login</h2>

          <label htmlFor="uname"><b>Email</b></label>
          <input type="email" name='emailT' placeholder='Enter Email' required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="pswT" required />

          <button type="submit" onClick={handleFormSubmitTutor}>Login</button>
          <h6><Link to = "/register-tutor">Forgot Password</Link></h6>
          <h5><Link to = "/register-tutor">Don't have an account? Register here!</Link></h5>
        </div>
      </div>
    </section>
  );
};

export default Logins;