// import React, { useState } from 'react'
// // import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

// function Navbar() {
//   // const user=useSelector((state)=>state.User.userName);
//   const [isMoon, setIsMoon] = useState(true);
//   const handleIconClick = () => {
//     setIsMoon(!isMoon); 
//   };
//   return (
//     <div>
    
//       <p>Home</p>
//       <p>Products</p>
//       <div> 
//       <button
//           onClick={handleIconClick}
//         >
//           <FontAwesomeIcon
//             icon={isMoon ? faMoon : faSun} 
//             size="2x" 
//             style={{ cursor: 'pointer' }} 
            
//           />
//         </button>
      
//           <span>View Cart</span>
//       <NavLink to='/'>SignOut</NavLink>
      
//       </div>
      
//     </div>
//   )
// }

// export default Navbar


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun,faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


function Navbar({isMoon,setIsMoon,showPage,setShowPage}){

  const handleHomeClick=()=>{
    setShowPage(true);
  }
  const handleProductClick=()=>{
    setShowPage(false);
  }
  const handleIconClick = () => {
    setIsMoon(!isMoon); 
  };


  return (
    <div className='p-5 flex justify-between border-b-2'>
      <div className="flex">
      <button
          onClick={handleHomeClick}
          className="hover:scale-110 transition-transform"
        >
      <p className='text-xl'>Home</p>
      </button>
      <button
          onClick={handleProductClick}
          className="hover:scale-110 transition-transform"
        >
      <p className='text-xl ml-3'>Product</p>
      </button>
      {/* <NavLink to='Home' className={'text-xl'}>Home</NavLink> */}
      {/* <p className='text-xl ml-3'>Product</p> */}
      </div>
      <div className="flex justify-end items-center h-full">
        <button
          onClick={handleIconClick}
          className="hover:scale-110 transition-transform"
        >
          <FontAwesomeIcon 
            icon={isMoon ? faMoon : faSun} 
            size="2x" 
            style={{ cursor: 'pointer' }} 
          />
        </button>
        <FontAwesomeIcon className="ml-3 mr-3" icon={faCartShopping} size="2x"/>
        <FontAwesomeIcon icon={faUser} size='2x'/>
      </div>
    </div>
  );
}

export default Navbar;
