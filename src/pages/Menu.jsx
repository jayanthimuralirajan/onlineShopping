import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div className='pt-10   flex flex-col gap-4 p-6 '>
      <NavLink 
        to='/MainPage/HomeAppliance'
        className='text-lg hover:text-blue-700 hover:scale-110 transition-transform'
      >
        Home Appliances
      </NavLink>
      
      <NavLink 
        to='/MainPage/Mens' 
        className='text-lg hover:text-blue-700 hover:scale-110 transition-transform'
      >
        Mens
      </NavLink>
      
      <NavLink 
        to='/MainPage/Womens' 
        className='text-lg hover:text-blue-700 hover:scale-110 transition-transform'
      >
        Womens
      </NavLink>
      
      <NavLink 
        to='/MainPage/Jewelery' 
        className='text-lg hover:text-blue-700 hover:scale-110 transition-transform'
      >
        Jewelery
      </NavLink>
    </div>
  )
}

export default Menu

