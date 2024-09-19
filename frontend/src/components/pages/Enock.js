import React from 'react'
import "./Martha.css"
import Footer from '../Footer'
import ReactAudioPlayer from 'react-audio-player'
import { Link } from 'react-router-dom'

function Enock() {
  return (
    <div>
      <>
    <div className='pic'>
        <img src="/images/jonas.jpg" alt="Artist" className='martha' />
    </div>
    <div className='container'>
      <h1>Enock Jonas</h1>
      <ul className='list'>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391128/">
            <img src='/images/download.png' alt='skiza'/>
              </Link>
          <a href="https://skizatune.com/6391128/">Amani ya moyo wangu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/sikuyanguenock.mpeg" />
         
          <Link className='dowload-btn' to="https://skizatune.com/6391294/">
            <img src='/images/download.png' alt='skiza'/>
              </Link>
           <a href="https://skizatune.com/6391294/">Ipo siku yangu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
         
          <Link className='dowload-btn' to="https://skizatune.com/6391297">
            <img src='/images/download.png' alt='skiza'/>
              </Link>  
          <a href="https://skizatune.com/6391297/">Moyo wangu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391129/">
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href="https://skizatune.com/6391129/">Bado naendelea chorus</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          <Link className='dowload-btn' to="https://skizatune.com/6391133">
            <img src='/images/download.png' alt='skiza'/>
          </Link>          
          <a href="https://skizatune.com/6391133">Kwa uzuri wako</a>
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391138">
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href="https://skizatune.com/6391138">Yahweh</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls autoPlay src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391290">
            <img src='/images/download.png' alt='skiza'/>
              </Link>
          <a href="https://skizatune.com/6391290">Happy Birthday Chorus</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls autoPlay src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391295">
            <img src='/images/download.png' alt='skiza'/>
              </Link>
          <a href="https://skizatune.com/6391295">Kuwafunga mdomo chorus</a>    
        </li>
        </ul>
    </div>
    </>
    <Footer />
  </div>
  )
}

export default Enock
