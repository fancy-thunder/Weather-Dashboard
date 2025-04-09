import React from 'react'

const Navbar = ({city, setCity, search}) => {
  return (
    <>
        <div className="nav-main">
          <input type="text" placeholder="Search the city" value={city} onChange={(e)=>{
            setCity(e.target.value)
          }}></input>
          <button onClick={search}>Search</button>
        </div> <br></br><br></br>
    </>
  )
}

export default Navbar