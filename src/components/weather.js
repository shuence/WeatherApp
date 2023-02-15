import React from 'react'
import "./styles.css"
import "./script.js"

const Weather = () => {
  return (
    <>
    <header>
        <script />
        <h1> Weather App </h1>
        </header>    
        <form id="form">
            <input
                type="text"
                id="search"
                placeholder="Search by location"
                autocomplete="off"
            />
        </form>
        <main id="main"></main>
  
    </>
  )
}

export default Weather