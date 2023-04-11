import React from 'react'
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

let tutors_data = data

const Tutorlist = () => {

    const getName = (e) => {
        const val = e.target.value.toLowerCase()
        for (let i = 0; i < tutors_data.length; i++) {
            let element = document.getElementById(tutors_data[i].id)

            if (!tutors_data[i].name.toLowerCase().includes(val)) {
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
            let element = document.getElementById(tutors_data[i].id)

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
                        <button type='submit'><AiOutlineSearch/></button>
                    </form>
                </div>

                <div className='search-subjects'>
                    <form action="" method='get'>
                        <input type="text" placeholder='Search by subject' name='search-name' onChange={getSubject}/>
                        <button type='submit'><AiOutlineSearch/></button>
                    </form>
                </div>
            </div>

            <div className='tutor-grid'>
                {
                    tutors_data.map(({id, image, name, subjects, aboutme, schedule, mail, linkedin}) => {
                        return (
                            <article id={id} key={id} className='tutor__item'>
                                <div className="tutor__item-header">
                                    <h3>{name}</h3>
                                    <img className="tutor__item-image" src='/Users/linusfackler/Documents/GitHub/UTDesign/tutorguide-react/src/assets/stock1.png' alt={name} />
                                </div>

                                <div className="tutor__item-description">
                                    <h5>{subjects}</h5>
                                    <p>{aboutme}</p>
                                    <h6>Schedule: {schedule}</h6>
                                </div>

                                <div className='links'>
                                    <a href={mail} target='_blank'><MdEmail/></a>
                                    <a href={linkedin} target='_blank'><BsLinkedin/></a>
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