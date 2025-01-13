import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addItem, setUser } from './CartSlice';

function SearchResults() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userDetail = useSelector((state) => state.User.loggedInUser); 
  const dispatch = useDispatch();
  
  const addToCart = (product) => {
    dispatch(addItem(product));
    dispatch(setUser(userDetail));
   
  };

  const buyNow = (product) => {
    console.log('Buying product:', product);
  };

  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!query) return; 

 
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        const filteredProducts = data.filter(product =>
          product.title.toLowerCase().includes(query.toLowerCase()) 
        );
        setProducts(filteredProducts);
      } catch (err) {
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <div className="p-5">
      <h2 className="text-2xl mb-4">Search Results for: {query}</h2>
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-5">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        products.map((product) => (
            <div
              className="bg-white w-1/4 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              key={product.id}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <p className="text-sm text-gray-600 mt-2">Price: ${product.price}</p>
                <div className="mt-4 flex justify-between">
                  <button
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 transition duration-200"
                    onClick={() => buyNow(product)}
                  >
                    Buy Now
                  </button>
                  <button
                    className="ml-1 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 transition duration-200"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        
      )}
    </div>
    </div>
  );
}

export default SearchResults;
