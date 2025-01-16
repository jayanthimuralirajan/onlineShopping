
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setUser } from './CartSlice';
import { loggedInUser } from './LoginUserSlice';
import Menu from './Menu';
import { Link, Navigate, NavLink, useNavigate, useNavigation } from 'react-router-dom'; 

function Mens() {
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
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        const mens = json.filter(product => product.category === `men's clothing`);
        const men = mens.map(product => ({
          ...product,
          quantity: 1
        }));
        setProducts(men);
        setSortedProducts(men);  
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
    <div className="py-10 px-5 flex">
      <Menu />
      <div className="flex flex-col">
          {sortedProducts.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            <>
              <p className="ml-40">
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

export default Mens;

