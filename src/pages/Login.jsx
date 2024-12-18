// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// function Login() {
//   const navigate=useNavigate();
//   const [username,setUsername]=useState('');
//   const [password,setPassword]=useState('');
//   const sUserName=useSelector((state)=>state.User.userName);
//   const sPassword=useSelector((state)=>state.User.password);
//   function handleSubmit(e){
//     e.preventDefault();
//     (sUserName===username && sPassword===password && username!='' && password!='')? navigate('/MainPage') : alert("Username and Password not correct");
//   }

//   return (
//     <>
//     <div className='bg-cyan-100 min-h-screen flex items-center justify-center'>
//       <div className='bg-white flex rounded-2xl shadow-lg max-w-2xl p-5'>
        
//         <div className='w-1/2'>
//           <h1>LOG IN</h1>
      
//           <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} id='uname' placeholder='Enter Your UserName'/>
    
//           <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} id='pass' placeholder='Enter Your Password'/>
//           <span>Forget password?</span>
//           <button onClick={handleSubmit}>Login</button>
//           <p>Don't have an account?<NavLink to="Register">Signup</NavLink></p>
//         </div>
     
//         <div className=''>
//           <img className='rounded-2xl' src='/loginImage.jpg' alt=''/>

//         </div>
      
//       </div>
//       </div>
//     </>
//   )
// }

// export default Login



import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const sUserName = useSelector((state) => state.User.userName);
  const sPassword = useSelector((state) => state.User.password);

  function handleSubmit(e) {
    e.preventDefault();

    if (username === '' || password === '') {
      alert("Username and Password cannot be empty");
      return;
    }

    if (sUserName === username && sPassword === password) {
      navigate('/MainPage');
    } else {
      alert("Username and Password are not correct");
    }
  }

  return (
    <>
      <div className='bg-cyan-100 min-h-screen flex items-center justify-center'>
        <div className='bg-white flex rounded-2xl shadow-lg max-w-2xl p-8'>
          
          {/* Login Form Section */}
          <div className='w-full md:w-1/2 p-6'>
            <h1 className='text-3xl font-semibold mb-6'>LOG IN</h1>
            
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='uname' className='block text-sm font-medium text-gray-700'>Username</label>
                <input
                  type='text'
                  id='uname'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
                  placeholder='Enter Your Username'
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
          
          {/* Image Section */}
          <div className='hidden md:block w-1/2'>
            <img className='w-full h-full object-cover rounded-2xl' src='/loginImage.jpg' alt='Login Illustration'/>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default Login;
