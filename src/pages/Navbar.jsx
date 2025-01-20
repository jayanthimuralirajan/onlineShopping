
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon, faSun, faCartShopping, faUser,faHome } from '@fortawesome/free-solid-svg-icons';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// function Navbar({ isMoon, setIsMoon }) {
//   const cartLength = useSelector((state) => 
//     state.Cart.cart.reduce((total, item) => total + item.quantity, 0)
//   );
  
//   const handleIconClick = () => {
//     setIsMoon(!isMoon); 
//   };

//   return (
//     <div className="p-5 flex justify-between border-b-2">
//       <div className="flex">
//         <img src='/logo.jpg' className='w-14'/>
//         <NavLink to="/MainPage/HomePage" className="hover:scale-110 transition-transform">
          
//           <FontAwesomeIcon className="ml-3" icon={faHome} size="lg" />
//         </NavLink>
//         <NavLink to="/MainPage/HomeAppliance" className="hover:scale-110 transition-transform">
//           <p className="text-xl ml-3">Product</p>
//         </NavLink>
//       </div>

      
//       <div className="flex justify-end items-center h-full">
//         <button
//           onClick={handleIconClick}
//           className="hover:scale-110 transition-transform"
//         >
//           <FontAwesomeIcon
//             icon={isMoon ? faMoon : faSun}
//             size="xl"
//             style={{ cursor: 'pointer' }}
//           />
//         </button>

//         <div className="relative flex items-center ml-5 group">
//           <NavLink to="/MainPage/Cart" className="flex items-center hover:scale-110 transition-transform">
//             <FontAwesomeIcon className="ml-3" icon={faCartShopping} size="xl" />
//             {cartLength > 0 && <span className="ml-2">{cartLength}</span>}
//           </NavLink>
//           <span className="absolute  bottom-0 left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity ml-2 top-9">Cart</span>
//         </div>

//         <div className="relative flex items-center ml-5 group">
//           <NavLink to="/MainPage/Profile" className="flex items-center hover:scale-110 transition-transform">
//             <FontAwesomeIcon className="ml-3" icon={faUser} size="xl" />
//           </NavLink>
//           <span className="absolute bottom-0 left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity ml-2 top-9">Profile</span>
          
//         </div>

       
//       </div>
//     </div>
//   );
// }

// export default Navbar;

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon, faSun, faCartShopping, faUser, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// function Navbar({ isMoon, setIsMoon }) {
//   const cartLength = useSelector((state) => 
//     state.Cart.cart.reduce((total, item) => total + item.quantity, 0)
//   );

//   const [searchTerm, setSearchTerm] = useState('');

//   const handleIconClick = () => {
//     setIsMoon(!isMoon); 
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearchClick = () => {
//     // Implement search functionality here
//     console.log("Searching for:", searchTerm);
//   };

//   return (
//     <div className="p-5 flex justify-between border-b-2">
//       <div className="flex items-center">
        
//         <NavLink to="/MainPage/HomePage" className="hover:scale-110 transition-transform">
//           <FontAwesomeIcon className="ml-3" icon={faHome} size="lg" />
//         </NavLink>
//         <NavLink to="/MainPage/HomeAppliance" className="hover:scale-110 transition-transform">
//           <p className="text-xl ml-3">Product</p>
//         </NavLink>
//       </div>
      
//       {/* Search Bar with Right-Side Icon */}
//       <div className="flex items-center mx-6 relative">
//       <img src='/logo.jpg' className='w-16 ' alt="Logo" />       
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           placeholder="Search..."
//           className="border rounded-full  pl-4 pr-10 py-2 "
//         />
//         <button 
//           onClick={handleSearchClick} 
//           className="absolute right-2 top-1/2 transform -translate-y-1/2"
//         >
//           <FontAwesomeIcon icon={faSearch} />
//         </button>
//       </div>

//       <div className="flex justify-end items-center h-full">
//         <button
//           onClick={handleIconClick}
//           className="hover:scale-110 transition-transform"
//         >
//           <FontAwesomeIcon
//             icon={isMoon ? faMoon : faSun}
//             size="xl"
//             style={{ cursor: 'pointer' }}
//           />
//         </button>

//         <div className="relative flex items-center ml-5 group">
//           <NavLink to="/MainPage/Cart" className="flex items-center hover:scale-110 transition-transform">
//             <FontAwesomeIcon className="ml-3" icon={faCartShopping} size="xl" />
//             {cartLength > 0 && <span className="ml-2">{cartLength}</span>}
//           </NavLink>
//           <span className="absolute bottom-0 left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity ml-2 top-9">Cart</span>
//         </div>

//         <div className="relative flex items-center ml-5 group">
//           <NavLink to="/MainPage/Profile" className="flex items-center hover:scale-110 transition-transform">
//             <FontAwesomeIcon className="ml-3" icon={faUser} size="xl" />
//           </NavLink>
//           <span className="absolute bottom-0 left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity ml-2 top-9">Profile</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faCartShopping, faUser, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom'; // Import `useNavigate`
import { useSelector } from 'react-redux';

function Navbar({ isMoon, setIsMoon }) {
  const cartLength = useSelector((state) =>
    state.Cart.cart.reduce((total, item) => total + item.quantity, 0)
  );

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Initialize the `navigate` hook

  const handleIconClick = () => {
    setIsMoon(!isMoon);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {

    navigate(`/MainPage/search?query=${searchTerm}`);
  };

  return (
    <div className="p-5 flex justify-between border-b-2">
      <div className="flex items-center">
        <NavLink to="/MainPage/HomePage" className="hover:scale-110 hover:text-red-500 transition-transform">
          <FontAwesomeIcon className="ml-3" icon={faHome} size="lg" />
        </NavLink>
        <NavLink to="/MainPage/HomeAppliance" className="hover:scale-110 hover:text-red-500 transition-transform">
          <p className="text-xl ml-3">Product</p>
        </NavLink>
      </div>
      
      <div className="flex items-center mx-6 relative">
        <img src='/logo.jpg' className='w-12 ' alt="Logo" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="border rounded-full pl-4 pr-10 py-2"
        />
        <button 
          onClick={handleSearchClick} 
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          <FontAwesomeIcon className="hover:scale-110 hover:text-red-500 transition-transform" icon={faSearch} />
        </button>
      </div>

      <div className="flex justify-end items-center h-full">
        <button
          onClick={handleIconClick}
          className="hover:scale-110 hover:text-red-500 transition-transform"
        >
          <FontAwesomeIcon
            icon={isMoon ? faMoon : faSun}
            size="xl"
            style={{ cursor: 'pointer' }}
          />
        </button>

        <div className="relative flex items-center ml-5 group">
          <NavLink to="/MainPage/Cart" className="flex items-center hover:text-red-500 hover:scale-110 transition-transform">
            <FontAwesomeIcon className="ml-3" icon={faCartShopping} size="xl" />
            {cartLength > 0 && <span className="ml-2">{cartLength}</span>}
          </NavLink>
          <span className="absolute bottom-0 left-0 w-full text-center text-red-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity ml-2 top-9">Cart</span>
        </div>

        <div className="relative flex items-center ml-5 group">
          <NavLink to="/MainPage/Profile" className="flex items-center hover:text-red-500 hover:scale-110 transition-transform">
            <FontAwesomeIcon className="ml-3" icon={faUser} size="xl" />

          </NavLink>
          <span className="absolute bottom-0 left-0 w-full text-red-500 text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity ml-2 top-9">Profile</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;








