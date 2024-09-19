import React from 'react'
import "./Martha.css"
import Footer from '../Footer'
import ReactAudioPlayer from 'react-audio-player'
import { Link } from 'react-router-dom'

function Yilima() {
  return (
    <div>
      <>
    <div className='pic'>
        <img src="/images/yilima.jpg" alt="Artist" className='martha' />
    </div>
    <div className='container'>
      <h1>Wiliam Yilima</h1>
      <ul className='list'>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391223/">
            <img src='/images/download.png' alt='skiza'/>
              </Link>    
          <a href="https://skizatune.com/6391223/">Kwamba Yesu Yukaribu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391224/">
            <img src='/images/download.png' alt='skiza'/>
              </Link>   
          <a href="https://skizatune.com/6391224/">Ndoto yangu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="audio/ukowapiyilima.mpeg" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391222">
            <img src='/images/download.png' alt='skiza'/>
              </Link>   
          <a href="https://skizatune.com/6391222">Uko Wapi Mungu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391225/">
            <img src='/images/download.png' alt='skiza'/>
              </Link>   
          <a href="https://skizatune.com/6391225/">Wingu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391586">
            <img src='/images/download.png' alt='skiza'/>
              </Link>   
          <a href="https://skizatune.com/6391586">Jehova</a>    
        </li>
      </ul>
    </div>
    <Footer />
    </>
  </div>
  )
}

export default Yilima
