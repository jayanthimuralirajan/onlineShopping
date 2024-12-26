
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

        <NavLink to="/MainPage/Cart" className="hover:scale-110 transition-transform flex items-center">
          <FontAwesomeIcon className="ml-3" icon={faCartShopping} size="xl" />
          {cartLength > 0 && <span className="ml-2">{cartLength}</span>}
        </NavLink>

        <FontAwesomeIcon className="ml-3" icon={faUser} size="xl" />
      </div>
    </div>
  );
}

export default Navbar;


