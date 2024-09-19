import React from 'react'
import "./Martha.css";
import Footer from '../Footer';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';

function Martha() {
  return (
    <>
    <div className='pic'>
        <img src="/images/matha.jpg" alt="Artist" className='martha' />
    </div>
    <div className='container'>
      <h1>Martha Mwaipaja</h1>
      <ul className='list'>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/naionamwaipaja.mpeg" />
          <Link className='dowload-btn' to="https://skizatune.com/6391184/">
            <img src='/images/download.png' alt='skiza'/>
          </Link>
          <a href="https://skizatune.com/6391184/">Naiona Kesho</a>
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/mamboyamebadilikamwaipaja.mpeg" />
          <Link className='dowload-btn' to="https://skizatune.com/6390120/">
            <img src='/images/download.png' alt='skiza'/>
          </Link>         
          <a href="https://skizatune.com/6390120/">Mambo Yamebadilika</a>
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/najulikanamwaipaja.mpeg" />
          <Link className='dowload-btn' to="https://skizatune.com/6390653">
            <img src='/images/download.png' alt='skiza'/>
          </Link>
          <a href="https://skizatune.com/6390653">Najulikana Mbinguni</a>  
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="/audio/sipiganagimwaipaja.mpeg" />
          <Link className='dowload-btn' to="https://skizatune.com/6391205/">
            <img src='/images/download.png' alt='skiza'/>
          </Link>
          <a href="https://skizatune.com/6391205/">Sipiganagi Mwenyewe</a>  
        </li>
        <li className='list-items'>
          <ReactAudioPlayer className='play' controls src="" />
          <Link className='dowload-btn' to="https://skizatune.com/6391735">
            <img src='/images/download.png' alt='skiza'/>
          </Link>
          <a href="https://skizatune.com/6391735">Adui ajui chorus</a>  
        </li>
      </ul>
    </div>
    <Footer />
    </>
  )
}

export default Martha;
