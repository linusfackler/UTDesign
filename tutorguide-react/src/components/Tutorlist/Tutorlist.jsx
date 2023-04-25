import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './tutorlist.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {MdFavorite} from 'react-icons/md'

const Tutorlist = () => {
    const [tutorArray, setTutors] = useState([])
    const [selectedStudent, setStudent] = useState([])
    const [apiCalled, setApiCalled] = useState(false);

    var currentStudent = JSON.parse(localStorage.getItem("student"))
    

    const instance = axios.create({baseURL: 'http://localhost:8080'});


    var call = 'students/' + currentStudent._id
    useEffect(() => {
        if (currentStudent != null) {
            instance.get(call)
                .then(res => setStudent(res.data))
                .catch(error => console.log(error));
        }
    }, []);
    currentStudent = selectedStudent


    useEffect(() => {
    instance.get('/tutors')
        .then(res => setTutors(res.data))
        .catch(error => console.log(error));
    }, []);

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

    function addFavorite (tutorID) {
        const oldTutors = currentStudent.favorite_tutors + ''

        const step1 = oldTutors.replace(/\[|\]/g, "");
        const step2 = step1.replace(/"/g, '');

        console.log(step2)

        let idArray = step2.split(",").map(item => item.trim());

        // console.log(tutorID)
        if (idArray.includes(tutorID)) {
            console.log("in remove")
            const index = idArray.indexOf(tutorID);
            idArray.splice(index, 1);
          } else {
            idArray.push(tutorID);
          }


        // console.log("NEW ARRAY:" + idArray)
        // console.log(oldTutors)
        // if (tutorID )
        // const favorite_tutors = oldTutors.replace(']', ',\"' + tutorID + '\"]')

        const favorite_tutors = idArray.join("\",\"");
        console.log(favorite_tutors)

        var call = '/students/' + currentStudent._id
        instance.put(call, {favorite_tutors})
        .then(function(response) {
            console.log(response)
            setApiCalled(true)
        })
        .catch(function (error) {
            console.log(error)
        });
    }

    useEffect(() => {
        if (apiCalled) {
            setApiCalled(false)
            var call = 'students/' + currentStudent._id

            instance.get(call)
                .then(res => setStudent(res.data))
                .catch(error => console.log(error));
          return
        }
      }, );


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
                                    {currentStudent != null && <a onClick={() => addFavorite(_id)} target='_blank'><MdFavorite/></a>}
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