import React from 'react'
import Footer from '../Footer'
import ReactAudioPlayer from 'react-audio-player'
import { Link } from 'react-router-dom'

function Margret() {
  return (
    <div>
      <>
    <div className='pic'>
        <img src="/images/margret.jpg" alt="Artist" className='martha' />
    </div>
    <div className='container'>
      <h1>Margret James</h1>
      <ul className='list'>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391289/">
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href="https://skizatune.com/6391289/">Unaweza verse1</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391279/">
            <img src='/images/download.png' alt='skiza'/>
              </Link>  
          <a href="https://skizatune.com/6391279/">Ungehesabu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391278">
            <img src='/images/download.png' alt='skiza'/>
              </Link>    
          <a href="https://skizatune.com/6391278">Unifundishe </a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391283/">
            <img src='/images/download.png' alt='skiza'/>
              </Link>   
          <a href="https://skizatune.com/6391283/">Jina langu </a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391286">
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href="https://skizatune.com/6391286">Ungehesabu part 2</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391288">
            <img src='/images/download.png' alt='skiza'/>
              </Link>    
          <a href="https://skizatune.com/6391288">Unaweza Chorus</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391285">
            <img src='/images/download.png' alt='skiza'/>
              </Link>      
          <a href="https://skizatune.com/6391285">Jina langu part 2</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391287">
            <img src='/images/download.png' alt='skiza'/>
              </Link>      
          <a href="https://skizatune.com/6391287">Ungehesabu part 1</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/magretJamesUnaweza.mpeg" />
          
          <Link className='dowload-btn' to="https://skizatune.com/6391277">
            <img src='/images/download.png' alt='skiza'/>
              </Link>          
          <a href="https://skizatune.com/6391277">Unaweza</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            
          <Link className='dowload-btn' to="https://skizatune.com/6391281">
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href="https://skizatune.com/6391281">Wewe ni njia</a>    
            </li>
            <li className='list-items'>
              <ReactAudioPlayer className='play' controls src="" />
              
          <Link className='dowload-btn' to="https://skizatune.com/6391280">
            <img src='/images/download.png' alt='skiza'/>
              </Link>  
          <a href="https://skizatune.com/6391280">Nimekuona Bwana</a>    
            </li>
            <li className='list-items'>
              <ReactAudioPlayer className='play' controls src="" />
              
          <Link className='dowload-btn' to="https://skizatune.com/6391282">
            <img src='/images/download.png' alt='skiza'/>
              </Link>     
          <a href="https://skizatune.com/6391282">Umenikumbuka</a>    
              </li>
              <li className='list-items'>
                <ReactAudioPlayer className='play' controls src="" />
                
          <Link className='dowload-btn' to="https://skizatune.com/6391284">
            <img src='/images/download.png' alt='skiza'/>
              </Link>        
          <a href="https://skizatune.com/6391284">Jina langu part 2</a>    
                </li>
              </ul>
    </div>
    </>
    <Footer />
  </div>
  )
}

export default Margret
