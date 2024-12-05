import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const MenuDiv = styled.div`
  
  display: flex;
  justify-content: center; 
  gap:3rem;
  border:2px;
  background-color: #d9c5ec;
  
`;
function Menu() {
  return (
    <MenuDiv>
       <NavLink to='Home'>Home Page</NavLink>
      <NavLink to='HomeAppliance'>Home Appliances</NavLink>
      <NavLink to='Mens'>Mens</NavLink>
      <NavLink to='Womens'>Womens</NavLink>
      <NavLink to='Kids'>Kids</NavLink>
    </MenuDiv>
  )
}

export default Menu
