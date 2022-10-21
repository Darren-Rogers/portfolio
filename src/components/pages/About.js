import React from 'react';
import me from "../../images/me.JPG"

export default function About() {
  return (
    <div className="flex-wrapper">
      <h1 className='text-center'>About Page</h1>
      <p className='text-center mx-5 my-3 aboutFont'>
      My name is Darren Rogers. I am nineteen years old. I gratuated highschool in 2021 and went to the University of North Carolin Wilmington for a semester. I have a pug/boston terrier mix dog, who's name is Winston. I enjoy playing videogames and working out. I have learned to make MERN applications, use express, express handlebars, mysql, JavaScript, HTML and CSS. I enjoy learning, especially about programming, which makes me excited to begin a career as a developer.
      </p>
      <div  id="solar">
        <img src={me} alt="Darren" ></img>
      </div>
    </div>
  );
}
