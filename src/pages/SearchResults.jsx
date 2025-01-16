import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setUser } from './CartSlice';
import { loggedInUser } from './LoginUserSlice';
import Menu from './Menu';
import { Link, Navigate, NavLink, useLocation, useNavigate, useNavigation } from 'react-router-dom'; 

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const userDetail = useSelector((state) => state.User.loggedInUser); 
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState('Default'); 
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const addToCart = (product) => {
    dispatch(addItem(product));
    dispatch(setUser(userDetail));
  };

  const buyNow=(product)=>{
    
    navigate('/MainPage/checkOutForm', { state: { product } });
  }

  useEffect(() => {
    if (!query) return; 

    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        const filteredProducts = json.filter(product =>
          product.title.toLowerCase().includes(query.toLowerCase()) 
        );
        
        const filteredProduct = filteredProducts.map(product => ({
          ...product,
          quantity: 1
        }));
        setProducts(filteredProduct);
        setSortedProducts(filteredProduct);  
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);

    let sorted = [...products];  

    if (selectedOption === 'Highest Price') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (selectedOption === 'Lowest Price') {
      sorted.sort((a, b) => a.price - b.price);
    } else {
      sorted = [...products];  
    }

    setSortedProducts(sorted);
  };

  return (
    <div className="p-5">
    <h2 className="text-2xl mb-4">Search Results for: {query}</h2>
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-5">
    
          {sortedProducts.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            <>
              <p className="">
                SortBy: 
                <select
                  className="w-36"
                  value={sortOption}
                  onChange={handleSortChange}
                >
                  <option value="Default">Default Price</option>
                  <option value="Highest Price">Highest Price</option>
                  <option value="Lowest Price">Lowest Price</option>
                </select>
              </p>
              <div className="flex flex-wrap justify-center gap-10 px-4 mt-5">
        
              {sortedProducts.map((product) => (
                <div
                  className="bg-white w-1/4 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
                  key={product.id}
                >
                  <NavLink to={`/MainPage/product/${product.id}`} className="block">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover"
                    />
                  
                    
                      <h3 className="p-4 text-lg font-semibold text-gray-800">{product.title}</h3>
                      <p className="pl-4 text-sm text-gray-600 mt-2">Price: ${product.price}</p>
                    </NavLink>      
                      <div className="pl-4 pr-4 mt-4 flex justify-between">
                        
                        <button
                          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 transition duration-200"
                          onClick={()=>buyNow(product)}
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
                
              
              ))}</div>
            </>
          )}
        
      </div>
    </div>
  );
}

export default SearchResults;


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import { addItem, setUser } from './CartSlice';

// function SearchResults() {
//   const location = useLocation();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const userDetail = useSelector((state) => state.User.loggedInUser); 
//   const dispatch = useDispatch();
  
//   const addToCart = (product) => {
//     dispatch(addItem(product));
//     dispatch(setUser(userDetail));
   
//   };

//   const buyNow = (product) => {
//     console.log('Buying product:', product);
//   };

//   const query = new URLSearchParams(location.search).get('query');

//   useEffect(() => {
//     if (!query) return; 

 
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`https://fakestoreapi.com/products`);
//         const data = await response.json();
//         const filteredProducts = data.filter(product =>
//           product.title.toLowerCase().includes(query.toLowerCase()) 
//         );
//         setProducts(filteredProducts);
//       } catch (err) {
//         setError('Error fetching products');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [query]);

//   return (
//     <div className="p-5">
//       <h2 className="text-2xl mb-4">Search Results for: {query}</h2>
//       <div className="flex flex-wrap justify-center gap-10 px-4 mt-5">
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         products.map((product) => (
//             <div
//               className="bg-white w-1/4 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
//               key={product.id}
//             >
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
//                 <p className="text-sm text-gray-600 mt-2">Price: ${product.price}</p>
//                 <div className="mt-4 flex justify-between">
//                   <button
//                     className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 transition duration-200"
//                     onClick={() => buyNow(product)}
//                   >
//                     Buy Now
//                   </button>
//                   <button
//                     className="ml-1 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 transition duration-200"
//                     onClick={() => addToCart(product)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
        
//       )}
//     </div>
//     </div>
//   );
// }

// export default SearchResults;
