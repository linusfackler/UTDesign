import React from 'react'
import './tutoroverview.css'
import STOCK from '../../assets/stock1.png'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {MdFavorite} from 'react-icons/md'

const TutorOverview = () => {
  return (
    <section id="tutorexamples">
        <h1>Available Tutors</h1>

        <div className='exampleboxes'>
            <div className='examples'>
                <img src={STOCK}/>
                <h3>Michael Morbius</h3>
                <p>Computer Science, Math</p>
                <div className='links'>
                    <a href="mailto:test@utdallas.edu" target="_blank"><MdEmail/></a>
                    <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
                    <a href="" target='_blank'><MdFavorite/></a>
                </div>
            </div>

            <div className='examples'>
                <img src={STOCK}/>
                <h3>Michael Morbius</h3>
                <p>Computer Science, Math</p>
                <div className='links'>
                    <a href="mailto:test@utdallas.edu" target="_blank"><MdEmail/></a>
                    <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
                </div>
            </div>

            <div className='examples'>
                <img src={STOCK}/>
                <h3>Michael Morbius</h3>
                <p>Computer Science, Math</p>
                <div className='links'>
                    <a href="mailto:test@utdallas.edu" target="_blank"><MdEmail/></a>
                    <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
                </div>
            </div>

            <div className='examples'>
                <img src={STOCK}/>
                <h3>Michael Morbius</h3>
                <p>Computer Science, Math</p>
                <div className='links'>
                    <a href="mailto:test@utdallas.edu" target="_blank"><MdEmail/></a>
                    <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TutorOverview