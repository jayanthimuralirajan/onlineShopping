

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, incrementItem, decrementItem } from './CartSlice';

function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [quantityl, setQuantityl] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quantity = useSelector((state) => {
    const productInCart = state.Cart.cart.find((item) => item.id === parseInt(id));
    return productInCart ? productInCart.quantity : 1;
  });

  useEffect(() => {
   
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  const addToCart = (product) => {
    product.quantity=quantityl;
    console.log(product);
    dispatch(addItem({ ...product}));
    console.log(product);
  };

  const buyNow = (product) => {
    product.quantity=quantityl;
    navigate('/MainPage/checkOutForm', { state: { product } });
    console.log('Buying product:', product);
    
  };

  const incrementQuantity = () => {
    setQuantityl(prevQuantity => prevQuantity + 1);
    // dispatch(incrementItem(product.id));
  };

  const decrementQuantity = () => {
    setQuantityl(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  
    // dispatch(decrementItem(product.id));
  };

  if (!product) {
    return <p>Loading product...</p>;
  }

  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-500' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="py-10 px-5 flex justify-center">
      <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-between">
       
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start mb-8 md:mb-0">
          
          <button
            onClick={() => navigate(-1)}
            className="text-gray-600 text-2xl mb-5 hover:text-black"
          >
            ← Back
          </button>

          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-cover mb-5"
          />

          <div className='w-full'>
          <div className="flex  items-center justify-center mb-4">
            <button
              onClick={decrementQuantity}
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              -
            </button>
            <span className="px-4">{quantityl}</span>
            <button
              onClick={incrementQuantity}
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              +
            </button>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => buyNow(product)}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 transition duration-200"
            >
              Buy Now
            </button>
            <button
              onClick={() => addToCart(product)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
        </div>
      
        <div className="md:w-1/2 p-6 flex flex-col">
          <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>
          <p className="text-lg text-gray-600 mb-2">Category: {product.category}</p>
          <p className="text-lg text-gray-600 mb-4">Price: ${product.price}</p>

          <div className="flex mb-4">{renderRating(product.rating.rate)}</div>

          <p className="text-sm text-gray-600 mb-6">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;







