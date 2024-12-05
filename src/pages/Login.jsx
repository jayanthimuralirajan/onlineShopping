import React from 'react';

import styled from "styled-components";
import Register from './Register';
import App from '../App';
import { NavLink } from 'react-router-dom';

const LoginLayout=styled.div`
  min-height:100vh;
  background-color:green;
  display: flex;
  align-items: center;
  justify-content: center;

`;
const LoginForm = styled.form`
  padding:50px;
  border-radius: 10px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;

  align-items: center;

  justify-content: center;
  gap: 1rem;
 
`;
const Heading=styled.h2`
  text-align: center;
`;
const Button=styled.button`
  text-align: center;
  width: 80%;
  background-color: green;
  border: none;
  padding: 7px;
  border-radius: 5px;
`;

const Input=styled.input`
  border-radius: 5px;
`;

function Login() {
  
  return (
    <>
    <LoginLayout>
      <LoginForm>
      <Heading>LOGIN</Heading>
      
      <Input type='text' id='uname' placeholder='Enter Your Email'/>
    
      <Input type='password' id='pass' placeholder='Enter Your Password'/>
      <span>Forget password?</span>
      <Button><NavLink to='MainPage'>Login</NavLink></Button>
      <p>Don't have an account?<NavLink to="Register">Signup</NavLink></p>
     </LoginForm>
      
      </LoginLayout>
    </>
  )
}

export default Login
