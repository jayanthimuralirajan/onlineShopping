
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faCartShopping, faUser,faHome } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar({ isMoon, setIsMoon }) {
  const cartLength = useSelector((state) => state.Cart.cart.length);
  
  const handleIconClick = () => {
    setIsMoon(!isMoon); 
  };

  return (
    <div className="p-5 flex justify-between border-b-2">
      <div className="flex">
        <img src='/logo.jpg' className='w-14'/>
        <NavLink to="/MainPage/HomePage" className="hover:scale-110 transition-transform">
          
          <FontAwesomeIcon className="ml-3" icon={faHome} size="lg" />
        </NavLink>
        <NavLink to="/MainPage/HomeAppliance" className="hover:scale-110 transition-transform">
          <p className="text-xl ml-3">Product</p>
        </NavLink>
      </div>

      <div className="flex justify-end items-center h-full">
        <button
          onClick={handleIconClick}
          className="hover:scale-110 transition-transform"
        >
          <FontAwesomeIcon
            icon={isMoon ? faMoon : faSun}
            size="xl"
            style={{ cursor: 'pointer' }}
          />
        </button>

        <div className="relative flex items-center ml-5 group">
          <NavLink to="/MainPage/Cart" className="flex items-center hover:scale-110 transition-transform">
            <FontAwesomeIcon className="ml-3" icon={faCartShopping} size="xl" />
            {cartLength > 0 && <span className="ml-2">{cartLength}</span>}
          </NavLink>
          <span className="absolute  bottom-0 left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity ml-2 top-9">Cart</span>
        </div>

        <div className="relative flex items-center ml-5 group">
          <NavLink to="/MainPage/Profile" className="flex items-center hover:scale-110 transition-transform">
            <FontAwesomeIcon className="ml-3" icon={faUser} size="xl" />
          </NavLink>
          <span className="absolute bottom-0 left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity ml-2 top-9">Profile</span>
          
        </div>

       
      </div>
    </div>
  );
}

export default Navbar;




