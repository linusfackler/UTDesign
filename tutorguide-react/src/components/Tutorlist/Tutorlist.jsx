import React from 'react'
import './tutorlist.css'
import {AiOutlineSearch} from 'react-icons/ai'

const Tutorlist = () => {
  return (
    <section id='tutors'>
        <h1>Tutors</h1>

        <div className='search-bars'>
            <div className='search-names'>
                <form action="https://www.google.com" method='get'>
                    <input type="text" placeholder='Search by name' name='search-name' />
                    <button type='submit'><AiOutlineSearch/></button>
                </form>
            </div>

            <div className='search-subjects'>
                <form action="https://www.google.com" method='get'>
                    <input type="text" placeholder='Search by subject' name='search-name' />
                    <button type='submit'><AiOutlineSearch/></button>
                    </form>
            </div>
        </div>

    </section>
  )
}

export default Tutorlist