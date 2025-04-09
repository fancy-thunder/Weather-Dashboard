import React from 'react'

const Navbar = ({city, setCity, search, darkMode,setDarkMode}) => {
  return (
    <>
        <div className="nav-main">
          <input type="text" placeholder="Search the city" value={city} onChange={(e)=>{
            setCity(e.target.value)
          }}></input>
          <button onClick={search}>Search</button>
          <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        </div> <br></br><br></br>
    </>
  )
}

export default Navbar