// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { createDetails } from './LoginUserSlice';


// function Register() {
//   const [username,setUsername]=useState('');
//   const [password1,setPassword1]=useState('');
//   const [password2,setPassword2]=useState('');
 
//   const dispatch = useDispatch();
//   const navigate=useNavigate();
//   function handleSubmit(e){
//     e.preventDefault();

//     if (!username || !password1 || !password2) {
//       alert("Please fill all the fields");
//     } else if (password1 !== password2) {
//       alert("Passwords do not match");
//     } else {
//       dispatch(createDetails({userName:username, password:password1}));
//       navigate('/MainPage');
//     }
   
//   }
  
//   return (
//     <div className='bg-cyan-100 min-h-screen flex items-center justify-center'>
//         <div className='bg-white flex rounded-2xl shadow-lg '>
//         <h1>Sign Up</h1>
     
//         <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter username:'/>
        
//         <input type='password'  value={password1} onChange={(e)=>setPassword1(e.target.value)} placeholder='Create a password'/>
        
//         <input type='password' value={password2} onChange={(e)=>setPassword2(e.target.value)} placeholder='Confirm your password'/>
        
//         <button onClick={handleSubmit}>Sign Up</button>
//         <p>Already have an account <NavLink to="/">Signin</NavLink></p>
//         </div>
      
//     </div>
//   )
// }

// export default Register;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { createDetails } from './LoginUserSlice';

function Register() {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Validation
    if (!username || !password1 || !password2) {
      alert("Please fill all the fields");
    } else if (password1 !== password2) {
      alert("Passwords do not match");
    } else {
      dispatch(createDetails({ userName: username, password: password1 }));
      navigate('/MainPage');
    }
  }

  return (
    <div className="bg-cyan-100 min-h-screen flex items-center justify-center">
      <div className="bg-white flex flex-col items-center rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6">Sign Up</h1>
        
        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password1" className="block text-sm font-medium text-gray-700">Create a password</label>
            <input
              type="password"
              id="password1"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Create a password"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password2" className="block text-sm font-medium text-gray-700">Confirm your password</label>
            <input
              type="password"
              id="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Already have an account? <NavLink to="/" className="text-cyan-600 hover:underline">Sign In</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Register;
