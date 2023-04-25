import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './tutoroverview.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {MdFavorite} from 'react-icons/md'
import { Link } from 'react-router-dom'

const TutorOverview = () => {

    const [tutorArray, setTutors] = useState([])

    var s = localStorage.getItem('student')

    const instance = axios.create({
    baseURL: 'http://localhost:8080'
    });

    useEffect(() => {
    instance.get('/tutors')
        .then(res => setTutors(res.data))
        .catch(error => console.log(error));
    }, []);

    let tutors_data = tutorArray.slice(0, 4)


    function addFavorite (tutorID) {
        console.log(tutorID)
    }

    return (
    <section id="tutorexamples">
        <h1>Available Tutors</h1>
        <h5><Link to = "/tutors">Click here to view all</Link></h5>

        <div className='exampleboxes'>
            {
                tutors_data.map(({_id, first_name, last_name, available_times, about_me, image, email, subjects, appointments}) => {
                    return (
                        <article key={_id}>
                            <div className='examples'>
                                <img className="tutor__item-image" src={image} />
                                <h3>{first_name} {last_name}</h3>
                                <h5>{subjects}</h5>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    </section>
    )
}

export default TutorOverview