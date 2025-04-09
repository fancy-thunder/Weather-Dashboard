import React from 'react'
import { useState } from 'react'
import getWeather from './Components/api'


import Navbar from './Components/Navbar'
import Weathercard from './Components/Weathercard'

const App = () => {
  return (
    <>
      <Navbar/>
      <Weathercard/>
    </>
  )
}

export default App