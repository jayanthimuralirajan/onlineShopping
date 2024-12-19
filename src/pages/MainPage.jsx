import React, { useState } from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import { Outlet } from 'react-router-dom'
import HomePage from './HomePage';


function MainPage() {
  
  const [isMoon, setIsMoon] = useState(false);
  const [showPage, setShowPage] = useState(true);
  return (
    
    <div className={`${isMoon ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Navbar isMoon={isMoon} setIsMoon={setIsMoon} showPage={showPage} setShowPage={setShowPage}/>
      {showPage ? (
        <HomePage />
      ) : (
        <div className="flex">
          <Menu />
          <Outlet />
        </div>
      )}
      
    </div>
    
  )
}

export default MainPage
