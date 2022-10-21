import React from 'react';
import Horiseon from "../../images/Horiseon-Search-Optimazation.png"
import Solar from "../../images/Solar-Clicker.png"
import Poke from "../../images/Pokemon-Giphy.png"
import Weather from "../../images/Weather-Forecast.png"

export default function Projects() {
  return (
    <div className='flex-wrapper'>
      <h1 className='text-center'>Projects Page</h1>
      <p className='text-center'>
        Below are coding projects I have worked on. Click the image and you will be navigated to the project.
      </p>
      <div className='container'>
        <div className='row'>
          <div className=' col-sm-12 col-md-12 col-lg-3'>
            <a href="https://darren-rogers.github.io/horiseon-refactor-project/" >
              <img src={Horiseon} alt="Horiseon Search Optimazation" className='solar'></img>
            </a>
          </div>
          <p className='col-sm-12 col-md-12 col-lg-9 align-self-center'>During this project, I learned to refactor code to improve the user experience. I changed semantic elements which gives a logistal flow to the code, I add alt attibutes to images, I grouped together repetitive css styling elements, and I gave the webpage a clear title.</p>
          <div className='col-sm-12 col-md-12 col-lg-3'>
            <a href="https://young-oasis-85311.herokuapp.com/" >
              <img src={Solar} alt="Solar Clicker Game" className='solar'></img>
            </a>
          </div>
          <p className='col-9 align-self-center'>Solar Clicker is a clicking based game in which the store increases per click, as planets are bought, the score increases over time. The website also contains a message bar that can be seen by other users and messages are saved to the database.  This project used Node.js, Express.js, Handlebars.js, Mysql, Sequilize, and Heroku.</p>
          <div className='col-sm-12 col-md-12 col-lg-3'>
            <a href="https://bbelk.github.io/pokemon-giphy-group-project/" >
              <img src={Poke} alt="Pokemon Giphy" className='solar'></img>
            </a>
          </div>
          <p className='col-sm-12 col-md-12 col-lg-9 align-self-center'>This website searches the pokemon api for information on the searched pokemon. The pokemon is also search in the giphy api which returns related images to that pokemon. Past searches are saved to local storage so they can be returned to.  This website uses JavaScript, CSS, jQuery, Bootstrap, Pokemon API, and Giphy API</p>
          <div className='col-sm-12 col-md-12 col-lg-3'>
            <a href="https://darren-rogers.github.io/weather-api/" >
              <img src={Weather} alt="Weather Forecast" className='solar'></img>
            </a>
          </div>
          <p className='col-sm-12 col-md-12 col-lg-9 align-self-center'>This website uses the Open Weather API to search for a single day and five day weather forecast. Temperature, humidity, wind speed and UV index are presented on today's forecast. The Open Weather API searches cities all across the world! An Icon is displayed that indicated the predicted weather.    </p>
          <a href='https://docs.google.com/document/d/1RsOhq_OF4wtdrikYCVKjC9Kudua_WgHxjAxet3d8IPg/edit'>
            <p className='text-center m-3 resumeFont'> My Resume</p>
          </a>
        </div>
      </div>
    </div>
  );
}
