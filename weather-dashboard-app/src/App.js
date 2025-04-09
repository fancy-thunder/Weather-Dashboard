import React from 'react'
import { useState } from 'react'
import getWeather from './Components/api'
import './index.css';


import Navbar from './Components/Navbar'
import Weathercard from './Components/Weathercard'

const App = () => {
  const [city,setCity] = useState("")
  const [weather, setWeather] =  useState({})
  const [error, setError] = useState("")
  const [darkMode, setDarkMode] = useState(false);

  const search = async () =>{
    try{
      const weather = await getWeather(city)
      setWeather(weather)
      setError("")
    }catch(error){
      setError("Unable to get the city")
      setWeather({})
    }
  }

  return (
    <>
      <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar
      city={city} 
      setCity={setCity} 
      search={search}
      darkMode={darkMode}
      setDarkMode={setDarkMode} />

      <Weathercard 
      city={weather?.name}
      temp={weather.main?.temp}
      description={weather.weather?.[0]?.description}
      humidity={weather.main?.humidity}
      wind={weather.wind?.speed}
      icon={`http://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`}/>
      </div>
    </>
  )
}

export default App