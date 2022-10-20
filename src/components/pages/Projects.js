import React from 'react';
import Horiseon from "../../images/Horiseon-Search-Optimazation.png"
import Solar from "../../images/Solar-Clicker.png"
import Poke from "../../images/Pokemon-Giphy.png"
import Weather from "../../images/Weather-Forecast.png"

export default function Projects() {
  return (
    <div>
      <h1 className='text-center'>Projects Page</h1>
      <p className='text-center'>
        Below are coding projects I have worked on. Click the image and you will be navigated to the project.
      </p>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <a href="https://darren-rogers.github.io/horiseon-refactor-project/" className='solar' >
              <img src={Horiseon} alt="Horiseon Search Optimazation" className='solar'></img>
            </a>
          </div>
          <div className='col-6'>
            <a href="https://young-oasis-85311.herokuapp.com/" >
              <img src={Solar} alt="Solar Clicker Game" className='solar'></img>
            </a>
          </div>
          <div className='col-6'>
            <a href="https://bbelk.github.io/pokemon-giphy-group-project/" >
              <img src={Poke} alt="Pokemon Giphy" className='solar'></img>
            </a>
          </div>
          <div className='col-6'>
            <a href="https://darren-rogers.github.io/weather-api/" >
              <img src={Weather} alt="Weather Forecast" className='solar'></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
