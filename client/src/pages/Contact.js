import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className='contact flex-row justify-center'>
              
      <form className="contact-form "  onSubmit={handleSubmit}>
       
        <h4 className="card-header">Contact Us</h4>
        <div className="card">
         
          <input type="text" className="form-input" placeholder='name' onBlur={handleChange} />
       
        <div>
                    <input type="email" className="form-input"   placeholder='email address' onBlur={handleChange} />
        </div>
        <div>
                   <textarea className="form-input"  rows="5"  placeholder='Leave a message...' onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="btn d-block w-100" type="submit">Submit</button>
        </div>
      </form>
      
      <h3 >We'd love to hear from you, give us a message and we'll be in touch with you</h3>
    </section>
  );
}

export default Contact;