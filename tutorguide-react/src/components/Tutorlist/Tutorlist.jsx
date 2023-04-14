import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './tutorlist.css'
import {AiOutlineSearch} from 'react-icons/ai'
import STOCK1 from './../../assets/stock1.png'
import STOCK2 from './../../assets/stock2.png'
import STOCK3 from './../../assets/stock3.png'
import STOCK4 from './../../assets/stock4.png'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {MdFavorite} from 'react-icons/md'
import data from './tutors.json'



// console.log(tutorTest)


const Tutorlist = () => {

    const [tutorArray, setTutors] = useState([])

    const instance = axios.create({
    baseURL: 'http://localhost:8080'
    });

    useEffect(() => {
    instance.get('/tutors')
        .then(res => setTutors(res.data))
        .catch(error => console.log(error));
    }, []);

    // console.log(tutorArray)

    let tutors_data = tutorArray

    const getName = (e) => {
        const val = e.target.value.toLowerCase()
        for (let i = 0; i < tutors_data.length; i++) {
            let element = document.getElementById(tutors_data[i]._id)

            let name =  tutors_data[i].first_name.toLowerCase() + " " + tutors_data[i].last_name.toLowerCase()
            if (!name.includes(val)) {
                element.style.display = 'none'
            }
            else {
                element.style.display = 'block'
            }
        }
    }

    const getSubject = (e) => {
        const val = e.target.value.toLowerCase()
        for (let i = 0; i < tutors_data.length; i++) {
            let element = document.getElementById(tutors_data[i]._id)

            if (!tutors_data[i].subjects.toLowerCase().includes(val)) {
                element.style.display = 'none'
            }
            else {
                element.style.display = 'block'
            }
        }
    }

    return (
        <section id='tutors'>
            <h1>Tutors</h1>

            <div className='search-bars'>
                <div className='search-names'>
                    <form action="" method='get'>
                        <input type="text" placeholder='Search by name' name='search-name' onChange={getName}/>
                        <button type='submit' disabled><AiOutlineSearch/></button>
                    </form>
                </div>

                <div className='search-subjects'>
                    <form action="" method='get'>
                        <input type="text" placeholder='Search by subject' name='search-name' onChange={getSubject}/>
                        <button type='submit' disabled><AiOutlineSearch/></button>
                    </form>
                </div>
            </div>

            <div className='tutor-grid'>
                {
                    tutors_data.map(({_id, first_name, last_name, available_times, about_me, image, email, subjects, appointments}) => {
                        return (
                            <article id={_id} key={_id} className='tutor__item'>
                                <div className="tutor__item-header">
                                    <h3>{first_name} {last_name}</h3>
                                    <img className="tutor__item-image" src={image} />
                                </div>

                                <div className="tutor__item-description">
                                    <h5>{subjects}</h5>
                                    <p>{about_me}</p>
                                    <h6>Schedule: {available_times}</h6>
                                </div>

                                <div className='links'>
                                    <a href={"mailto:"+email} target='_blank'><MdEmail/></a>
                                    <a href="https://linkedin.com/" target='_blank'><BsLinkedin/></a>
                                    <a href="" target='_blank'><MdFavorite/></a>
                                </div>

                            </article>
                        )
                    })
                }


            </div>

        </section>
    )
}

export default Tutorlist