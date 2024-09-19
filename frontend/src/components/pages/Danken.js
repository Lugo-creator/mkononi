import React from 'react';
import "./Martha.css";
import Footer from '../Footer';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';

function Danken() {
  return (
    <div>
      <>
    <div className='pic'>
        <img src="/images/boaz.jpg" alt="Artist" className='martha' />
    </div>
    <div className='container'>
      <h1>Boaz Danken</h1>
      <ul className='list'>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/haufananishwiboaz.mpeg" />
          <Link className='dowload-btn' to="https://skizatune.com/6390059/">
            <img src='/images/download.png' alt='skiza'/>
          </Link>
        <a href="https://skizatune.com/6390059/" className='songName'>Haufananishwi</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/jinaboaz.mpeg" />
          <Link className='dowload-btn' to="https://skizatune.com/6390061/">
            <img src='/images/download.png' alt='skiza'/>
              </Link>
              <a href="https://skizatune.com/6390061/">Jina la Yesu Linatisha</a>              
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/kumbukumbuboaz.mpeg" />          
          <Link className='dowload-btn' to="https://skizatune.com/6390068">
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href="https://skizatune.com/6390068">Kumbukumbu Langu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/sitaachaboaz.mpeg" />
          <Link className='dowload-btn' to="https://skizatune.com/6390066/">
            <img src='/images/download.png' alt='skiza'/>
              </Link>
          <a href="https://skizatune.com/6390066/">Sitaacha Kumsubiri Mungu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/haleluhyaboaz.mpeg" />
          <Link className='dowload-btn' to="https://skizatune.com/6390058">
            <img src='/images/download.png' alt='skiza'/>
              </Link>
          <a href="https://skizatune.com/6390058/">Haleluhya Mungu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/nakushukuruboaz.mpeg" />
          <Link className='dowload-btn' to="https://skizatune.com/6390064">
            <img src='/images/download.png' alt='skiza'/>
              </Link>
              <a href="https://skizatune.com/6390064/">Ninakushukuru</a>
              </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/uinuliweboaz.mpeg" />
          <Link className='dowload-btn' to="https://skizatune.com/6390067">
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href="https://skizatune.com/6390067/">Uinuliwebo</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/niugusemoyo.mpeg" />          
          <Link className='dowload-btn' to='https://skizatune.com/6390060'>
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href="https://skizatune.com/6390060/">Niugusemoyo</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/mungumwenyeisharaboaz.mpeg" />

          <Link className='dowload-btn' to='https://skizatune.com/6390062'>
            <img src='/images/download.png' alt='skiza'/>
              </Link>
          <a href='https://skizatune.com/6390062'>Mungu mwenye ishara</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/ameshinda.mpeg" />
          <Link className='dowload-btn' to='https://skizatune.com/6390057'>
            <img src='/images/download.png' alt='skiza'/>
              </Link>  
           <a href='https://skizatune.com/6390057'>Ameshinda Yesu</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/ninakupenda.mpeg" />
          
          <Link className='dowload-btn' to='https://skizatune.com/6390063'>
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href='https://skizatune.com/6390063'>Ninakupenda</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/niugusemoyoboaz.mpeg" />
          
          <Link className='dowload-btn' to='https://skizatune.com/6390065'>
            <img src='/images/download.png' alt='skiza'/>
              </Link>  
          <a href='https://skizatune.com/6390065'>Niugusemoyo Bwana</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/nanikamaweweboaz.mpeg" />
          
          <Link className='dowload-btn' to='https://skizatune.com/6390069'>
            <img src='/images/download.png' alt='skiza'/>
              </Link>  
          <a href='https://skizatune.com/6390069'>Nanikamawewebo</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
        
          <Link className='dowload-btn' to='https://skizatune.com/631143'>
            <img src='/images/download.png' alt='skiza'/>
              </Link> 
          <a href='https://skizatune.com/631143'>Yesu uongezeke</a>    
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
         
          <Link className='dowload-btn' to='https://skizatune.com/6391142'>
            <img src='/images/download.png' alt='skiza'/>
              </Link>
          <a href='https://skizatune.com/6391142'>Yesu ukuhuruke</a>    
        </li>
    </ul>
    </div>
    
    </>
    <Footer />
  </div>
  )
}

export default Danken
