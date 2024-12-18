import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div className='h-screen overflow-auto flex flex-col gap-3 p-7 w-3/12'>
       <NavLink to='Home'>Home Page</NavLink>
      <NavLink to='HomeAppliance'>Home Appliances</NavLink>
      <NavLink to='Mens'>Mens</NavLink>
      <NavLink to='Womens'>Womens</NavLink>
      <NavLink to='Kids'>Kids</NavLink>
      
    </div>
  )
}

export default Menu
