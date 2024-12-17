import React from 'react'

import "./homeAppliance.css";


function Kids() {
  
  const KidsData = [
    {
      name: "",
      price: 2000,
      photoName: "/kids1.jpg",
      
    },
    {
      name: "",
      price: 1300,
      photoName: "/kids2.jpg",
      
    },
    {
      name: "",
      price: 1000,
      photoName: "/kids3.jpg",
      
    },
    {
      name: "",
      price: 1500,
      photoName: "/kids4.jpg",
      
    },
    {
      name: "",
      price: 800,
      photoName: "/kids5.jpg",
      
    },
    {
      name: "",
      price: 700,
      photoName: "/kids6.jpg",
    
    },
    {
      name: "",
      price: 1500,
      photoName: "/kids7.jpg",
      
    },
    {
      name: "",
      price: 1200,
      photoName: "/kids8.jpg",
      
    },
    {
      name: "",
      price: 1200,
      photoName: "/kids9.jpg",
      
    },
  ];

  
  return (
    <div>
      
      <div className='productlist'>
        
        {KidsData.map((data, index) => (
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

export default Kids;