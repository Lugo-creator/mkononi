import React, { useState } from 'react';
import './BizzDescription.css';
import Footer from '../Footer';

function BizzDescription() {
  const [owner, setOwner] = useState('');
  const [business, setBusiness] = useState('');
  const [mobile, setMobile] = useState('');
  const [description, setDescription] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    switch (field) {
      case 'owner':
        setOwner(value);
        break;
      case 'business':
        setBusiness(value);
        break;
      case 'mobile':
        setMobile(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile && business && description && owner) {
      fetch('http://localhost:3001/description', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          owner,
          business,
          mobile,
          description,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, 'userRegister');
          setMsg('Information sent');
          localStorage.setItem('token', data.data);
          window.location.href = './Business';
        })
        .catch((error) => {
          console.error('Error:', error);
          setError('An error occurred. Please try again.');
        });
    } else {
      setError('All fields are required.');
    }
  };

  return (
    <>
      <div className='room'>
        <form className='form' onSubmit={handleSubmit}>
          <p className='label'>Business Owner</p>
          <input 
            type='text'
            placeholder='Enter your name'
            className='input'
            name='owner'
            value={owner}
            onChange={(e) => handleInputChange(e, 'owner')}
            required
          />
          <p className='label'>Business Name</p>
          <input 
            type='text'
            placeholder='Enter name of your business'
            className='input'
            name='business'
            value={business}
            onChange={(e) => handleInputChange(e, 'business')}
            required
          />
          <p className='label'>Phone number</p>
          <input 
            type='text'
            placeholder='Phone number'
            className='input'
            name='mobile'
            value={mobile}
            onChange={(e) => handleInputChange(e, 'mobile')}
            required
          />
          <p className='label'>Business Description</p>
          <textarea 
            className='descriptionInput'
            name='description'
            value={description}
            onChange={(e) => handleInputChange(e, 'description')}
            placeholder='Briefly describe your business'
            rows={4} cols={50}
          />
          <br />
          <button 
            type='submit'
            className='submit'
          >
            Submit
          </button>
        </form>
        <br/>
        {msg && <p className='success-message'>{msg}</p>}
        {error && <p className='error-message'>{error}</p>}
      </div>
      <Footer />
    </>
  );
}

export default BizzDescription;
