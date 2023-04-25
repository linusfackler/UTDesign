import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './appstudent.css'

const AppStudent = () => {

    const [tutorArray, setTutors] = useState([])
    const [selectedStudent, setStudent] = useState([])
    const [apiCalled, setApiCalled] = useState(false);
    const instance = axios.create({baseURL: 'http://localhost:8080'});


    var student = JSON.parse(localStorage.getItem("student"))

    var filteredTutors = []

    useEffect(() => {
        instance.get('/tutors')
            .then(res => setTutors(res.data))
            .catch(error => console.log(error));
        }, []);
    
    // let tutors_data = tutorArray
    console.log(tutorArray)

    const handleFormSubmitStudent = (e) => {
        e.preventDefault();
        const time = document.getElementsByName("time")[0].value;
        const subject = document.getElementsByName("subject")[0].value;

        if (time === '' || subject === '') {
            alert("Please fill out all fields.");
            return;
          }

        setApiCalled(true)


        for (let i = 0; i < tutorArray.length; i++) {
            let element = document.getElementById(tutorArray[i]._id)
            if (tutorArray[i].subjects.toLowerCase().includes(subject.toLowerCase()) && tutorArray[i].available_times.toLowerCase().includes(time)) {
                element.style.display = 'block'
            }
            else {
                element.style.display = 'none'
            }
        }
    }

    function handleBookApp(tutorID) {
        const time = document.getElementsByName("time")[0].value;
        const subject = document.getElementsByName("subject")[0].value;

        instance.post('/reservations', {
            time: time,
            student_id: student._id,
            tutor_id: tutorID,
            subject: subject
        })
        .then(function(response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        });
    }

    

  return (
    <section id='appstudents'>
        <h1>Appointments</h1>
        <h3>Book an appointment</h3>

        <div className='book'>
          <h2>Student Login</h2>

          <label htmlFor="uname"><b>Time</b></label>
          <input type="text" name='time' placeholder='Enter Time' required />

          <label htmlFor="uname"><b>Subject</b></label>
          <input type="text" placeholder="Enter Subject" name="subject" required />

          <button type="submit" onClick={handleFormSubmitStudent}>Check availability</button>
        </div>

        <div>
            <h4>Available Tutors</h4>
            <div className='availabletutors'>
                {
                tutorArray.map(({_id, first_name, last_name, available_times, about_me, image, email, subjects, appointments}) => {
                    return (
                        <article id={_id} key={_id}>
                            <div>
                                <img className="tutor__item-image" src={image} />
                                <h3>{first_name} {last_name}</h3>
                                <h5>{subjects}</h5>
                                <button className='bookbtn' type="submit" onClick={() => handleBookApp(_id)}>Book</button>
                            </div>
                        </article>
                    )
                })
                }
            </div>    
        </div>


    </section>
  )
}

export default AppStudent