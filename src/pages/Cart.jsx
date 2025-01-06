// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { getCart } from './CartSlice';
// import CartItem from './CartItem';
// import CheckOutForm from './CheckOutForm';

// function Cart() {
//     const user=useSelector((state)=>state.Cart);
//     console.log(user);
    
//     const cart=useSelector((state)=>state.Cart.cart);
    
//     const [total,setTotal]=useState(0);
//     const [eShipping,setEShipping]=useState(0);
//     const [showCheckout, setShowCheckout] = useState(false);
  
//     const handleCheckoutClick = () => {
//       setShowCheckout(true); // Show the checkout form when button is clicked
//   };

//     useEffect(() => {
//       const calculatedTotal = cart.reduce((acc, item) => acc + item.price, 0);
//       setTotal(calculatedTotal);
//     }, [cart]);
//   return (
//     <>
//     <div className='flex justify-between'>
//     <div className='p-9'>
//     <h2 className='text-xl font-semibold pb-4'>Your cart, {}</h2>
//     { (!cart || cart.length === 0) ?(
//    <p>Your cart is empty.</p>):<p></p>
// }
//     {cart.map((item)=>(
//         <CartItem item={item} key={item.id}/>
        

//     ))}
//     </div>
//     <div className="p-9 bg-slate-100 m-10 rounded-lg shadow-lg h-1/4">
//   <h1 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">ORDER SUMMARY</h1>
//   <div className="space-y-3">
//     <span className="text-lg text-gray-700 mr-28">Total:</span>${total.toFixed(2)}<p></p>
//     <span className="text-lg text-gray-700  pb-2 mr-2 inline-block">Estimate Shipping:</span>${eShipping.toFixed(2)}
//     <p className='border-b'></p>
    
//     <span className="text-xl font-semibold text-gray-800 mr-16 pr-2">Subtotal:</span><span className='text-xl font-semibold'>${(total+eShipping).toFixed(2)}</span>
//   </div>
//   <button onClick={handleCheckoutClick}  className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
//     Checkout
//   </button>
// </div>

    
//     </div>
//     {showCheckout && <CheckOutForm />}
//   </>
//   )
  
// }

// export default Cart;




// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getCart } from './CartSlice';
// import CartItem from './CartItem';
// import CheckOutForm from './CheckOutForm';

// function Cart() {
//   const user = useSelector((state) => state.Cart);
//   const cart = useSelector((state) => state.Cart.cart);

//   const [total, setTotal] = useState(0);
//   const [eShipping, setEShipping] = useState(0);
//   const [showCheckout, setShowCheckout] = useState(false);

//   const handleCheckoutClick = () => {
//     if (cart.length > 0) {
//       setShowCheckout(true); // Show the checkout form only if cart is not empty
//     }
//   };

//   useEffect(() => {
//     const calculatedTotal = cart.reduce((acc, item) => acc + item.price, 0);
//     setTotal(calculatedTotal);
//   }, [cart]);

//   return (
//     <>
//       <div className="flex justify-between relative">
//         <div className="p-9">
//           <h2 className="text-xl font-semibold pb-4">Your cart, {user.userName}</h2>
//           {!cart || cart.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             cart.map((item) => (
//               <CartItem item={item} key={item.id} />
//             ))
//           )}
//         </div>

//         <div className="p-9 bg-slate-100 m-10 rounded-lg shadow-lg h-1/4">
//           <h1 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">ORDER SUMMARY</h1>
//           <div className="space-y-3">
//             <span className="text-lg text-gray-700 mr-28">Total:</span>${total.toFixed(2)}
//             <p></p>
//             <span className="text-lg text-gray-700 pb-2 mr-2 inline-block">Estimate Shipping:</span>${eShipping.toFixed(2)}
//             <p className="border-b"></p>
//             <span className="text-xl font-semibold text-gray-800 mr-16 pr-2">Subtotal:</span>
//             <span className="text-xl font-semibold">${(total + eShipping).toFixed(2)}</span>
//           </div>
//           <button
//             onClick={handleCheckoutClick}
//             className={`mt-6 w-full py-3 font-semibold rounded-lg transition duration-300 
//               ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
//             disabled={cart.length === 0}  // Disable button if cart is empty
//           >
//             Checkout
//           </button>
//         </div>
//       </div>

//       {/* Conditionally render the Checkout form as an overlay */}
//       {showCheckout && (
//         <div
//           className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-10 flex justify-center items-center"
//           style={{ zIndex: 1000 }}
//         >
//           <div className="relative bg-white p-10 rounded-lg shadow-lg">
//             <CheckOutForm />
//             <button
//               onClick={() => setShowCheckout(false)}
//               className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full"
//             >
//               X
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Cart;


import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCart } from './CartSlice';
import CartItem from './CartItem';
import CheckOutForm from './CheckOutForm';

function Cart() {
  const user = useSelector((state) => state.Cart);
  const cart = useSelector((state) => state.Cart.cart);

  const [total, setTotal] = useState(0);
  const [eShipping, setEShipping] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckoutClick = () => {
    if (cart.length > 0) {
      setShowCheckout(true); // Show the checkout form only if cart is not empty
    }
  };

  useEffect(() => {
    const calculatedTotal = cart.reduce((acc, item) => acc + item.price, 0);
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
          <button
            onClick={handleCheckoutClick}
            className={`mt-6 w-full py-3 font-semibold rounded-lg transition duration-300 
              ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            disabled={cart.length === 0}  // Disable button if cart is empty
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Conditionally render the Checkout form as an overlay */}
      {showCheckout && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-10 flex justify-center items-center"
          style={{ zIndex: 1000 }}
        >
          <div className="relative bg-white p-10 rounded-lg shadow-lg">
            <CheckOutForm />
            <button
              onClick={() => setShowCheckout(false)}
              className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
