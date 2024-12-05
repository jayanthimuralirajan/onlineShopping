import React, { useState } from 'react';

import styled from "styled-components";
import Register from './Register';
import App from '../App';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const sEmail=useSelector((state)=>state.User.emailId);
  const sPassword=useSelector((state)=>state.User.password);
  function handleSubmit(e){
    e.preventDefault();
    (sEmail===email && sPassword===password)? navigate('/MainPage') : alert("Username and Password not correct");
  }

  return (
    <>
    <LoginLayout>
      <LoginForm>
      <Heading>LOG IN</Heading>
      
      <Input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} id='uname' placeholder='Enter Your Email'/>
    
      <Input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} id='pass' placeholder='Enter Your Password'/>
      <span>Forget password?</span>
      <Button onClick={handleSubmit}>Login</Button>
      <p>Don't have an account?<NavLink to="Register">Signup</NavLink></p>
     </LoginForm>
      
      </LoginLayout>
    </>
  )
}

export default Login
