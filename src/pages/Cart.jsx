import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from './CartSlice';

function Cart() {
    const username=useSelector((state)=>state.User.username);
    const cart=useSelector(getCart);
    const dispatch=useDispatch();
  return (
    <>
    {cart.map((item)=>(
        CartItem item={item} key={item.productId}/>

    ))}
    <button>BuyNow</button>    
  </>
  )
}

export default Cart

const username=useSelector((state))