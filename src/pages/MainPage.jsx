import React, { useState } from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import { Outlet } from 'react-router-dom'


function MainPage() {
  
  const [isMoon, setIsMoon] = useState(false);
  return (
    
    <div className={`${isMoon ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Navbar isMoon={isMoon} setIsMoon={setIsMoon}/>
      <div className='flex'>
      <Menu/>
      <Outlet/>
      </div>
    </div>
    
  )
}

export default MainPage
