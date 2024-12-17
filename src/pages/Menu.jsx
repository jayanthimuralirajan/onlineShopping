import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const MenuDiv = styled.div`
  padding  : 12px;
  display: flex;
  justify-content: center; 
  gap:3rem;
  border:2px;
  
  
`;
function Menu() {
  return (
    <div className='flex flex-col gap-3 p-7'>
       <NavLink to='Home'>Home Page</NavLink>
      <NavLink to='HomeAppliance'>Home Appliances</NavLink>
      <NavLink to='Mens'>Mens</NavLink>
      <NavLink to='Womens'>Womens</NavLink>
      <NavLink to='Kids'>Kids</NavLink>
      <NavLink to='Home'>Home Page</NavLink>
      <NavLink to='HomeAppliance'>Home Appliances</NavLink>
      <NavLink to='Mens'>Mens</NavLink>
      <NavLink to='Womens'>Womens</NavLink>
      <NavLink to='Kids'>Kids</NavLink>
      <NavLink to='Home'>Home Page</NavLink>
      <NavLink to='HomeAppliance'>Home Appliances</NavLink>
      <NavLink to='Mens'>Mens</NavLink>
      <NavLink to='Womens'>Womens</NavLink>
      <NavLink to='Kids'>Kids</NavLink>
      <NavLink to='Home'>Home Page</NavLink>
      <NavLink to='HomeAppliance'>Home Appliances</NavLink>
      <NavLink to='Mens'>Mens</NavLink>
      <NavLink to='Womens'>Womens</NavLink>
      <NavLink to='Kids'>Kids</NavLink>
      <NavLink to='Home'>Home Page</NavLink>
      <NavLink to='HomeAppliance'>Home Appliances</NavLink>
      <NavLink to='Mens'>Mens</NavLink>
      <NavLink to='Womens'>Womens</NavLink>
      <NavLink to='Kids'>Kids</NavLink>
    </div>
  )
}

export default Menu
