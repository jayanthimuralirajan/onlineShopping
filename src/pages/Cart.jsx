import React from 'react'
import { useSelector } from 'react-redux'
import { getCart } from './CartSlice';
import CartItem from './CartItem';

function Cart() {
    const username=useSelector((state)=>state.User.userName);
    
    const cart=useSelector((state)=>state.Cart.cart);
    
  return (
    <>
    <h2 className='text-xl font-semibold'>Your cart, {username}</h2>
    { (!cart || cart.length === 0) ?(
   <p>Your cart is empty.</p>):cart.length
}
    {cart.map((item)=>(
        <CartItem item={item} key={item.id}/>

    ))}
    <button>BuyNow</button>    
  </>
  )
  
}

export default Cart;
