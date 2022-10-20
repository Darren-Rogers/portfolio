import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <div className='container'>
        <form>
          <label for="name" className='row contact'>Name</label>
          <input type="text" id="username"></input>
          <label for="email" className='row contact' >Email</label>
          <input type="text" id="userEmail"></input>
          <label for="message" className='row contact' >Message</label>
          <input type="text" id="userMessage"></input>
          <input type="submit" ></input>
        </form>
      </div>
    </div>
  );
}
