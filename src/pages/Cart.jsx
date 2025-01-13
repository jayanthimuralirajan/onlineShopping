


import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCart } from './CartSlice';
import CartItem from './CartItem';
import CheckOutForm from './CheckOutForm';
import { NavLink } from 'react-router-dom';

function Cart() {
  const user = useSelector((state) => state.Cart);
  const cart = useSelector((state) => state.Cart.cart);

  const [total, setTotal] = useState(0);
  const [eShipping, setEShipping] = useState(0);
  

 

  useEffect(() => {
    const calculatedTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
setTotal(calculatedTotal);

  }, [cart]);

  return (
    <>
      <div className="flex justify-between relative">
        <div className="p-9">
          <h2 className="text-xl font-semibold pb-4">Your cart, {user.userName}</h2>
          {!cart || cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <CartItem item={item} key={item.id} />
              
            ))
          )}
          {console.log(cart)}
        </div>

        <div className="p-9 bg-slate-100 m-10 rounded-lg shadow-lg h-1/4">
          <h1 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">ORDER SUMMARY</h1>
          <div className="space-y-3">
            <span className="text-lg text-gray-700 mr-28">Total:</span>${total.toFixed(2)}
            <p></p>
            <span className="text-lg text-gray-700 pb-2 mr-2 inline-block">Estimate Shipping:</span>${eShipping.toFixed(2)}
            <p className="border-b"></p>
            <span className="text-xl font-semibold text-gray-800 mr-16 pr-2">Subtotal:</span>
            <span className="text-xl font-semibold">${(total + eShipping).toFixed(2)}</span>
          </div>
          
          <NavLink to="/MainPage/checkOutForm">
            <button
              className={`mt-6 w-full py-3 font-semibold rounded-lg transition duration-300 
                ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              disabled={cart.length === 0}
            >
              Checkout
            </button>
          </NavLink>
         </div>
      </div>

    </>
  );
}

export default Cart;
