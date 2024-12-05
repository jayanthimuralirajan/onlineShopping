import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const NavbarDiv = styled.div`
  
  display: flex;
  justify-content: space-between; 
  background-color: yellowgreen;
  
`;
function Navbar() {
  return (
    <NavbarDiv>
      <h1>Online Shopping</h1>
      <div> 
      <NavLink to='/'>SignOut</NavLink>
      
      </div>
      
    </NavbarDiv>
  )
}

export default Navbar
