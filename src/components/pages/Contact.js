import React from 'react';

export default function Contact() {
  return (
    <div className="flex-wrapper">
      <h1>Contact Page</h1>
      <div className='container mt-5'>
        <form className='center row'>
          <div className='center mb-2'>
            <label for="name" className='row contact col-2 '>Name</label>
            <input type="text" id="username"></input>
          </div>
          <div className='center mb-2'>
            <label for="email" className='row contact col-2' >Email</label>
            <input type="text" id="userEmail"></input>
          </div>
          <div className='center mb-2'>
            <label for="message" className='row contact col-2' >Message</label>
            <input type="text" id="userMessage"></input>
          </div>
            <input type="submit" className='center col-3 btn btn-primary'></input>
        </form>
      </div>
    </div>
  );
}
