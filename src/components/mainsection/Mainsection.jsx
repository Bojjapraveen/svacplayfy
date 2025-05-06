import React, { useState } from 'react'
import './mainsection.css';
import Trendingcard from '../trendingCard/Trendingcard';
import SpecificMusicfile from '../../pages/specificMusicPage/SpecificMusicfile'

const Mainsection = () => {
  const [currentPage, setCurrentPage] = useState ("home")
  const [currentEle, setCurrentEle] = useState(null)
  return (
    <main className = "mainSectionContainer">
      {
        currentPage === "home" ? 
        <>
          
          <Trendingcard setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle} />
          
        </> : currentPage === "musicSpecificPage" ? 
        <>
        <SpecificMusicfile currentEle={currentEle}/>
        </> : 
        
          null
      }  
    </main>
    
    
  )
}

export default Mainsection