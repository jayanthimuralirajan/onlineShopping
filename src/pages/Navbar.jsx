import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const NavbarDiv = styled.div`
  
  display: flex;
  justify-content: space-between; 
  background-color: yellowgreen;
  
`;
function Navbar() {
  const sEmail=useSelector((state)=>state.User.emailId);
  return (
    <NavbarDiv>
      <h1>Online Shopping</h1>
      <div> 
        <span>Welcome {sEmail}&nbsp;&nbsp;View Cart&nbsp;&nbsp;</span>
      <NavLink to='/'>SignOut</NavLink>
      
      </div>
      
    </NavbarDiv>
  )
}

export default Navbar
