import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'
import InfoCard from '../InfoCard'
import cardData from '../CardData'
const Home = () => {
  return (
    // console.log("Home")
   <>
   
   <Navbar/>
   <InfoCard details={cardData}/>
   </>

    // <Route path = "/" exact element={<Navbar/>}></Route>
   
  )
}

export default Home