/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import './Download.css'
import Footer from '../Footer'



function Download() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  function handleChange(e, index){
    if(isNaN(e.target.value)) return false;

    setOtp([...otp.map((data, indx) => (indx === index? e.target.value:data))])

    if(e.target.value && e.target.nextSibling){
      e.target.nextSibling.focus()
    }
  }
  const [state, setState] = useState(1);

  const action = (index) => {
    setState(index)
  }
  return (
    <>
    <div className='download-container'>
     <div className='box'>
        <div className='tabs'>
          <div onClick={()=>action(1)} className={`${state===1 ?
            'tab active-tab': 'tab'}`}>
            Download Tune
          </div>

          <div className={`${state===2 ?
            'tab active-tab': 'tab'}`} onClick={()=>action(2)}>
            Tune Present           
          </div>       
        </div>

        <div className='contents'>
          <div className={`${state===1? 'content active-content':'content'}`}>
      <div className='download-tune'>
        <form className='download-form' >
          <p className='download-label'>Enter Mobile Number</p>
          <input type="text" placeholder="Enter mobile number: 07XXXXXXXX" className='download-input' required/>
          <button type="submit" className='download-submit'>Get OTP</button>
          <p className='download-label'>Verify Code</p>
          <div className='otp-area'>
          {
            otp.map((data, i) => {
           
              return <input type="text" 
                    value={data} 
                    maxLength={1}
                    onChange={(e)=>handleChange(e, i)}
                    required/>;
       
            })
          }
          </div>
          <p className='download-label'>Set To</p>
            <select name="choice" className='download-input'>
              <option value="callers" className='input-item'>Entertain Your Callers</option>
              <option value="self" className='input-item'>Entertain Yourself</option>
            </select>
          <br />
          <button type="submit" className='download-submit'>Log in & Download</button>
          <button type="submit" className='download-submit'>Close</button>
          <br />
        </form>

        <div className='details-row'>
          <div className='details-column'>
            <p>Skiza Code: 90002323</p>
            <p>Additional information: CRBT</p>
            <p>Validity (Day): 1</p>
            <p>Provider: CellulantBenga</p>
          </div>

          <div className='details-column'>
            <p>Language: English</p>
            <p>Skiza Price (KSH): 1.50</p>
            <p>MySkiza Price (KSH): 1.50</p>
            <p>Upload/Update Time: 2024-8-6</p>
          </div>
        </div>
      </div>
          </div>
          <div className={`${state===2? 'content active-content':'content'}`}>
      <div className='download-tune'>
        <form className='download-form' >
          <p className='download-label'>Enter Mobile Number</p>
          <input type="text" placeholder="Enter mobile number: 07XXXXXXXX" className='download-input' required/>
          <button type="submit" className='download-submit'>Get OTP</button>
          <p className='download-label'>Phone Number of Recommender</p>
          <input type="text" placeholder="Enter mobile number: 07XXXXXXXX" className='download-input' required/>
          <p className='download-label'>Verify Code</p>
          <div className='otp-area'>
          {
            otp.map((data, i) => {
           
              return <input type="text" 
                    value={data} 
                    maxLength={1}
                    onChange={(e)=>handleChange(e, i)}
                    required/>;
       
            })
          }
          </div>
          <p className='download-label'>Set To</p>
            <select name="choice" className='download-input'>
              <option value="callers" className='input-item'>Entertain Your Callers</option>
              <option value="self" className='input-item'>Entertain Yourself</option>
            </select>
          <br />
          <button type="submit" className='download-submit'>Log in & Download</button>
          <button type="submit" className='download-submit'>Close</button>
          <br />
        </form>

        <div className='details-row'>
          <div className='details-column'>
            <p>Skiza Code: 90002323</p>
            <p>Additional information: CRBT</p>
            <p>Validity (Day): 1</p>
            <p>Provider: CellulantBenga</p>
          </div>

          <div className='details-column'>
            <p>Language: English</p>
            <p>Skiza Price (KSH): 1.50</p>
            <p>MySkiza Price (KSH): 1.50</p>
            <p>Upload/Update Time: 2024-8-6</p>
          </div>
        </div>
      </div>
      </div>                   
    </div>  

     </div>


    </div>

    <Footer />
    </>
  )
}

export default Download
