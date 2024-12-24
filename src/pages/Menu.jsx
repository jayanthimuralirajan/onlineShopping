import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div className='h-screen overflow-auto flex flex-col gap-3 w-1/4 pl-5'>
       
      <NavLink to='/MainPage/HomeAppliance'>Home Appliances</NavLink>
      <NavLink to='/MainPage/Mens'>Mens</NavLink>
      <NavLink to='/MainPage/Womens'>Womens</NavLink>
      <NavLink to='/MainPage/Jewelery'>Jewelery</NavLink>
      
    </div>
  )
}

export default Menu
