import React from 'react'
import "./Martha.css"
import Footer from '../Footer'
import ReactAudioPlayer from 'react-audio-player'
import { Link } from 'react-router-dom'

function Morgan() {
  return (
    <div>
      <>
    <div className='pic'>
        <img src="/images/mogan.jpg" alt="Artist" className='martha' />
    </div>
    <div className='container'>
      <h1>Modest Morgan</h1>
      <ul className='list'>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/simbawayudamogan.mpeg" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6390205/">
            <img src='/images/download.png' alt='skiza'/>
              </Link>       
          <a href="https://skizatune.com/6390205/">Simba wa Yuda</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6390206/">
            <img src='/images/download.png' alt='skiza'/>
              </Link>   
          <a href="https://skizatune.com/6390206/">Yesu Ni Upendo</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6390201">
            <img src='/images/download.png' alt='skiza'/>
              </Link>    
          <a href="https://skizatune.com/6390201">Hakuna Kama Wewe</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6390203/">
            <img src='/images/download.png' alt='skiza'/>
              </Link>  
          <a href="https://skizatune.com/6390203/">Yuko Njiani</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6390202">
            <img src='/images/download.png' alt='skiza'/>
              </Link>  
          <a href="https://skizatune.com/6390202">Masiah Masiah Yahwe</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6390204">
            <img src='/images/download.png' alt='skiza'/>
              </Link>  
          <a href="https://skizatune.com/6390204">Naburudika</a>    
        </li>
      </ul>
    </div>
    <Footer />
    </>
  </div>
  )
}

export default Morgan
