import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './registerstu.css'

const RegisterStu = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

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

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
        const firstName = document.getElementsByName("fname")[0].value;
        const lastName = document.getElementsByName("lname")[0].value;
        const email = document.getElementsByName("email")[0].value;
        
        if (firstName === '' || lastName === '' || email === '') {
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
        
        // const client = new MongoClient('<mongoDB connection string>');

        const instance = axios.create({baseURL: 'http://localhost:8080'});

        instance.post('/students', {
            first_name: firstName,
            last_name: lastName,
            password: password,
            email: email,
            favorites: 0,
            favorite_tutors: "",
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
    };        
    

    return (
        <section id='reg-student'>
            <h1>Welcome to TutorGuide</h1>
    
            <div className='register-container'>
                <h2>Student Registration</h2>
    
                <label htmlFor="uname"><b>First Name</b></label>
                <input type="text" name='fname' placeholder='Enter First Name' required />
    
                <label htmlFor="uname"><b>Last Name</b></label>
                <input type="text" name='lname' placeholder='Enter Last Name' required />
    
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
    
    export default RegisterStu