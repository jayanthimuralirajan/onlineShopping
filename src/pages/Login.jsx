


import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './LoginUserSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');

  const users = useSelector((state) => state.User.user); 
  const loggedInUser = useSelector((state)=>state.User.loggedInUser);
  console.log(users);
  console.log(loggedInUser);
  dispatch(loginUser({ email: email, password }));

  function handleSubmit(e) {
    e.preventDefault();


    if (email === '' || password === '') {
      alert("Email id and Password cannot be empty");
      return;
    }

    
    
   

    if (loggedInUser) {
      navigate('/MainPage');
    } else {
      alert("EmailId or Password is incorrect");
    }
  }

  return (
    <>
      <div className='bg-cyan-100 min-h-screen flex items-center justify-center'>
        <div className='bg-white flex rounded-2xl shadow-lg p-8'>
          
          <div className='w-full md:w-1/2 p-6'>
            <h1 className='text-3xl font-semibold mb-6'>LOG IN</h1>
            
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='uname' className='block text-sm font-medium text-gray-700'>EmailID</label>
                <input
                  type='text'
                  id='uname'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
                  placeholder='Enter Your EmailID'
                />
              </div>

              <div className='mb-6'>
                <label htmlFor='pass' className='block text-sm font-medium text-gray-700'>Password</label>
                <input
                  type='password'
                  id='pass'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
                  placeholder='Enter Your Password'
                />
              </div>

              <div className='flex justify-between items-center'>
                <span className='text-sm text-cyan-600 hover:underline cursor-pointer'>Forget password?</span>
                <button type="submit" className='px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition duration-200'>
                  Login
                </button>
              </div>
            </form>

            <p className='mt-4 text-center'>
              Don't have an account? <NavLink to="/Register" className='text-cyan-600 hover:underline'>Signup</NavLink>
            </p>
          </div>

          <div className='hidden md:block w-1/2'>
            <img className='w-full h-full object-cover rounded-2xl' src='/loginImage.jpg' alt='Login Illustration'/>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default Login;
