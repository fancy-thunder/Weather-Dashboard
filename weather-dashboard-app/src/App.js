import React from 'react'
import { useState } from 'react'
import getWeather from './Components/api'


import Navbar from './Components/Navbar'
import Weathercard from './Components/Weathercard'

const App = () => {
  const [city,setCity] = useState("")
  const [weather, setWeather] =  useState({})
  const [error, setError] = useState("")

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
      <Navbar
      city={city} 
      setCity={setCity} 
      search={search} />

      <Weathercard 
      city={weather?.name}
      temp={weather.main?.temp}
      description={weather.weather?.[0]?.description}
      humidity={weather.main?.humidity}
      wind={weather.wind?.speed}
      icon={`http://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`}/>
    </>
  )
}

export default App