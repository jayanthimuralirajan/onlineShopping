
import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { addItem} from './CartSlice';
import Menu from './Menu';


function HomeAppliance() {
  
 
  const [products, setProducts] = useState([]);


  const dispatch=useDispatch();
  const addToCart = (product) => {
    dispatch(addItem(product))
  };

  const buyNow = (product) => {
    console.log('Buying product:', product);
    
  };

  

  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        const electronics = json.filter(product => product.category === 'electronics');
        setProducts(electronics);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="py-10 px-5 flex" >
      <Menu/>
      <div className="flex flex-wrap justify-center gap-10 px-4">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <div className="bg-white w-1/4 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105" key={product.id}>
              <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
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

export default HomeAppliance;
