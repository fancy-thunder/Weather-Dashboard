import React from 'react'

const Weathercard = ({city,temp,weatherCondition,humidity,wind,icon}) => {
  return (
    <>
        <div className="weather-card">
            <h1>Weather Dashboard:</h1>
            <h1>{city}</h1>
            <h2>{temp}</h2>
            <h3>{weatherCondition}</h3>
            <h3>{humidity}</h3>
            <h3>{wind}</h3>
            <img src={icon} alt="Image of weather"></img>
        </div>
    </>
  )
}

export default Weathercard