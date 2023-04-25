import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './studentprofile.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {MdFavorite} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


const StudentProfile = () => {
  const [selectedStudent, setStudent] = useState([])
  const navigate = useNavigate();
  const [selectedApps, setApps] = useState([])

  var student = JSON.parse(localStorage.getItem("student"))
  var call = 'students/' + student._id

  const instance = axios.create({baseURL: 'http://localhost:8080'});

  useEffect(() => {
    instance.get(call)
        .then(res => setStudent(res.data))
        .catch(error => console.log(error));
    }, []);


  const favoriteTutors = selectedStudent.favorite_tutors + ''
  // console.log(favoriteTutors)

  const step1 = favoriteTutors.replace(/\[|\]/g, "");
  const step2 = step1.replace(/"/g, '');
  // console.log(step2)

  const favorites = step2.split(",")
  // console.log(favorites)
  const [tutorArray, setTutors] = useState([])

  useEffect(() => {
  instance.get('/tutors')
      .then(res => setTutors(res.data))
      .catch(error => console.log(error));
  }, []);


  var callApps = 'reservations/student_id/' + selectedStudent._id
  console.log(callApps)

  useEffect(() => {
    instance.get(callApps)
    .then(res => setApps(res.data))
    .catch(error => { 
      
    });
    }, []);

    console.log(selectedApps) 

  const favTutors = tutorArray.filter(tutor => favorites.includes(tutor._id));

  // console.log(favTutors)

  const handleLogOut = (e) => {
    localStorage.removeItem("student")
    navigate('/', { replace: true })
  }

  return (
    <section id='studentprofile'>
      <h1>Hi, {student.first_name}!</h1>

      <h4>Your favorite Tutors</h4>
      <div className='favorites'>
        {
          favTutors.map(({_id, first_name, last_name, available_times, about_me, image, email, subjects, appointments}) => {
              return (
                  <article key={_id}>
                      <div className='fav'>
                          <img className="tutor__item-image" src={image} />
                          <h3>{first_name} {last_name}</h3>
                          <h5>{subjects}</h5>
                          <div className='links'>
                              <a href={"mailto:"+email} target='_blank'><MdEmail/></a>
                              <a href="https://linkedin.com/" target='_blank'><BsLinkedin/></a>
                              <a href="" target='_blank'><MdFavorite/></a>
                          </div>
                      </div>
                  </article>
              )
          })
        }
      </div>

      <div className='apps'>
        {
          selectedApps.map(({_id, time, student_id, tutor_id, subject}) => {
              return (
                  <article key={_id}>
                      <div className='app'>
                          {/* <h3>{first_name} {last_name}</h3> */}
                          <h3>{tutorArray.find(tutor => tutor._id === tutor_id).first_name}</h3>
                          <h5>{subject}</h5>
                      </div>
                  </article>
              )
          })
        }
      </div>
      
      <button onClick={handleLogOut} className='logoutButton'>Log Out</button>
    </section>
  )
}

export default StudentProfile