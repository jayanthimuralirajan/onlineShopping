import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { createDetails } from './LoginUserSlice';

const RegisterDiv=styled.div`
  min-height:100vh;
  background-color:green;
  display: flex;
  align-items: center;
  justify-content: center;

`;
const RegisterForm = styled.form`
  padding:50px;
  border-radius: 10px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;

  align-items: center;

  justify-content: center;
  gap: 1rem;
 
`;

const Button=styled.button`
  text-align: center;
  width: 80%;
  background-color: green;
  border: none;
  padding: 7px;
  border-radius: 5px;
`;

function Register() {
  const [email,setEmail]=useState('');
  const [password1,setPassword1]=useState('');
  const [password2,setPassword2]=useState('');
 
  const dispatch = useDispatch();
  const navigate=useNavigate();
  function handleSubmit(e){
    e.preventDefault();

    if (!email || !password1 || !password2) {
      alert("Please fill all the fields");
    } else if (password1 !== password2) {
      alert("Passwords do not match");
    } else {
      dispatch(createDetails(email, password1));
      navigate('/MainPage');
    }
   
  }
  
  return (
    <RegisterDiv>
      <RegisterForm>
      <h1>Sign Up</h1>
     
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your emailid'/>
        
        <input type='password'  value={password1} onChange={(e)=>setPassword1(e.target.value)} placeholder='Create a password'/>
        
        <input type='password' value={password2} onChange={(e)=>setPassword2(e.target.value)} placeholder='Confirm your password'/>
        
        <Button onClick={handleSubmit}>Sign Up</Button>
        <p>Already have an account <NavLink to="/">Signin</NavLink></p>
        </RegisterForm>
      
    </RegisterDiv>
  )
}

export default Register;

