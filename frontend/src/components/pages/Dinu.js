import React from 'react'
import "./Martha.css"
import Footer from '../Footer'
import ReactAudioPlayer from 'react-audio-player'
import { Link } from 'react-router-dom'

function Dinu() {
  return (
    <div>
      <>
    <div className='pic'>
        <img src="/images/dinu.jpg" alt="Artist" className='martha' />
    </div>
    <div className='container'>
      <h1>Dinu Zeno</h1>
      <ul className='list'>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/kijitodinu.mpeg" />
         
          <Link className='dowload-btn' to="https://skizatune.com/6390082/">
            <img src='/images/download.png' alt='skiza'/>
              </Link>
          <a href="https://skizatune.com/6390082/">Kijito cha Utakaso</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6390089/">
            <img src='/images/download.png' alt='skiza'/>
              </Link>  
          <a href="https://skizatune.com/6390089/">Kale Nilitembea</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6390081">
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href="https://skizatune.com/6390081/">Kale Utakaso</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6390080/">
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href="https://skizatune.com/6390080/">Kale Mwokozi</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6390088">
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href="https://skizatune.com/6390088/">Kale Mteteeni Yesu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6390085">
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href="https://skizatune.com/6390085">Kale Mteteeni Yesu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6390084">
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href="https://skizatune.com/6390084/">Kale Mteteeni Yesu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6390086">
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href="https://skizatune.com/6390086">Kale Mteteeni Yesu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6390087">
            <img src='/images/download.png' alt='skiza'/>
              </Link>  
          <a href="https://skizatune.com/6390087">Kale Mteteeni Yesu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6390083">
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href="https://skizatune.com/6390083/">Kale Mteteeni Yesu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
         
          <Link className='dowload-btn' to="https://skizatune.com/6390078/">
            <img src='/images/download.png' alt='skiza'/>
              </Link>  
          <a href="https://skizatune.com/6390078/">Twonane milele</a>    
        </li>
      </ul>
    </div>
    </>
    <Footer />
  </div>
  )
}

export default Dinu
