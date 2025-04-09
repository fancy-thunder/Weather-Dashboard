import React from 'react'

const Weathercard = ({city,temp,description,humidity,wind,icon}) => {
  return (
    <>
        <div className="weather-card">
            <h1>Weather Dashboard:</h1>
            <h1>{city}</h1>
            <h2>Temperature: {temp} °C</h2>
            <h3>What is happening now: {description}</h3>
            <h3>Humidity: {humidity}</h3>
            <h3>Wind Speed: {wind}</h3>
            <img src={icon} alt="Image of weather"></img>
        </div>
    </>
  )
}

export default Weathercard