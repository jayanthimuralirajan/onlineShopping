// import React from 'react'
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';

// function Profile() {
//     const user=useSelector((state)=>state.User.loggedInUser);
//     console.log(user);
//   return (
//     <div>
//       <h1>WELCOME {user}</h1>
//       <NavLink to="/" className="text-cyan-600 hover:underline">Logout</NavLink>
//     </div>
//   )
// }

// export default Profile


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser,loggedInUser } from './LoginUserSlice';  // Import the logout action
import { useNavigate } from 'react-router-dom'; // For navigation after logout

function Profile() {
  const user = useSelector((state) => state.User.loggedInUser); // Get the logged-in user
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user);
  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatch logout action to clear logged-in user
    navigate('/'); // Redirect to login page after logout
  };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-100">
    //   <div className="bg-white flex flex-col items-center rounded-2xl shadow-lg p-8 w-full max-w-md">
    //     {user ? (
    //       <>
    //         {/* Display username of logged-in user */}
    //         <h1 className="text-3xl font-semibold mb-6">Welcome, {user.userName}!</h1>
    //         <h2>Name:{user.userName}</h2>
    //         <h2>EmailId:{user.email}</h2>
            
            
    //         <button
    //           onClick={handleLogout}
    //           className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
    //         >
    //           Logout
    //         </button>
    //       </>
    //     ) : (
    //       // If no user is logged in
    //       <p className="text-xl text-gray-600">You are not logged in!</p>
    //     )}
    //   </div>
    // </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-100 py-8">
  <div className="bg-white flex flex-col items-center rounded-2xl shadow-lg p-8 w-full max-w-md space-y-6">
    {user ? (
      <>
        {/* Display username of logged-in user */}
        <h1 className="text-3xl font-semibold text-center text-gray-800">Welcome, {user.userName}!</h1>
        
        <div className="space-y-2 ">
          <h2 className="text-lg font-medium text-gray-700">Name: <span className="text-gray-500">{user.userName}</span></h2>
          <h2 className="text-lg font-medium text-gray-700">EmailId: <span className="text-gray-500">{user.email}</span></h2>
        </div>

        <button
          onClick={handleLogout}
          className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          Logout
        </button>
      </>
    ) : (
      // If no user is logged in
      <p className="text-xl text-gray-600">You are not logged in!</p>
    )}
  </div>
</div>

  );
}

export default Profile;
