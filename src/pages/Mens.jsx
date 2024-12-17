import React from 'react'


import "./homeAppliance.css";


function Mens() {
  
  const MensData = [
    {
      name: "",
      price: 1000,
      photoName: "/mens1.jpg",
      
    },
    {
      name: "",
      price: 2000,
      photoName: "/mens2.jpg",
      
    },
    {
      name: "",
      price: 300,
      photoName: "/mens3.jpg",
      
    },
    {
      name: "",
      price: 1500,
      photoName: "/mens4.jpg",
      
    },
    {
      name: "",
      price: 500,
      photoName: "/mens5.jpg",
      
    },
    {
      name: "",
      price: 800,
      photoName: "/mens6.jpg",
      
    },
    {
      name: "",
      price: 850,
      photoName: "/mens7.jpg",
      
    },
    {
      name: "",
      price: 300,
      photoName: "/mens8.jpg",
      
    },
    {
      name: "",
      price: 2200,
      photoName: "/mens9.jpg",
      
    },
  ];

  
  return (
    <div>
      
      <div className='productlist'>
        
        {MensData.map((data, index) => (
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

export default Mens;