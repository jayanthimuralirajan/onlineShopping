import React from 'react'

import "./homeAppliance.css";


function Womens() {
  
  const WomensData = [
    {
      name: "",
      price: 1000,
      photoName: "/womens1.jpg",
      
    },
    {
      name: "",
      price: 700,
      photoName: "/womens2.jpg",
      
    },
    {
      name: "",
      price: 3000,
      photoName: "/womens3.jpg",
      
    },
    {
      name: "",
      price: 1500,
      photoName: "/womens4.jpg",
      
    },
    {
      name: "",
      price: 500,
      photoName: "/womens5.jpg",
      
    },
    {
      name: "",
      price: 700,
      photoName: "/womens6.jpg",
      
    },
    {
      name: "",
      price: 3500,
      photoName: "/womens7.jpg",
      
    },
    {
      name: "",
      price: 900,
      photoName: "/womens8.jpg",
      
    },
    {
      name: "",
      price: 1200,
      photoName: "/womens9.jpg",
      
    },
  ];

  
  return (
    <div>
      
      <div className='productlist'>
        
        {WomensData.map((data, index) => (
          <div className="product" key={index}>
            <img src={data.photoName} />
            <p>Price: {data.price}</p>
            <button>BuyNow</button>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Womens;
