import React from 'react'
import "./Business.css"
import Footer from '../Footer'
import { Link } from 'react-router-dom'

function Business() {
  return (
    <>
      <div className='description'>
        <img className="bizlog" src="/images/bizz.png" alt='Skiza Bizna' />
          <div className='biz-description'>
            <div className='intro'>
              <h3>Personalized music for your brand</h3>
              <h2>IMARISHA YOUR BUSINESS WITH SKIZA TUNES</h2>
              <p>Tell your callers about your hustle and use skiza biashara to grow your business today.</p>
            </div>
            <Link className='biz-button' to="/description">
              GET STARTED
            </Link>
          </div>
      </div>  
        <div className='bronze'>
          <h1>Get started from as low as Ksh.1000</h1>
          <p>For small businesses, this setup is quick and simple. When consumers call, greet them with a         personalized ringtone.</p>
          <ul className='features'>
            <h3>Features</h3>
            <li>Personalized business tone</li>
            <li>Put up on Skiza</li>
            <li>Select one voice gender</li>
            <li>Expert recording</li>
          </ul>
        </div> 
     
    <Footer />
    </>
  )
}

export default Business;
