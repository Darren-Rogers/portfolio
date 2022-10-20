import React from 'react';
import me from "../../images/me.JPG"

export default function About() {
  return (
    <div>
      <h1 className='text-center'>About Page</h1>
      <p className='text-center mx-5 my-3'>
      My name is Darren Rogers. I am nineteen years old. I gratuated highschool in 2021 and went to the University of North Carolin Wilmington for a semester. I have a pug/boston terrier mix dog, who's name is Winston. I enjoy playing videogames and working out. I have learned to make MERN applicationd and enjoying coding.
      </p>
      <img src={me} alt="Darren" className="justify-self-center"></img>
    </div>
  );
}
