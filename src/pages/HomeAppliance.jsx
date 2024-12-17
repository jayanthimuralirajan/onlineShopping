import React from 'react';
import "./homeAppliance.css";


function HomeAppliance() {
  
  const homeApplianceData = [
    {
      name: "",
      price: 1000,
      photoName: "/homeAp1.jpg",
      
    },
    {
      name: "",
      price: 7000,
      photoName: "/homeAp2.jpg",
      
    },
    {
      name: "",
      price: 3000,
      photoName: "/homeAp3.jpg",
      
    },
    {
      name: "",
      price: 1500,
      photoName: "/homeAp4.jpg",
    
    },
    {
      name: "",
      price: 500,
      photoName: "/homeAp5.jpg",
      
    },
    {
      name: "",
      price: 700,
      photoName: "/homeAp6.jpg",
      
    },
    {
      name: "",
      price: 3500,
      photoName: "/homeAp7.jpg",
      
    },
    {
      name: "",
      price: 300,
      photoName: "/homeAp8.jpg",
      
    },
    {
      name: "",
      price: 1200,
      photoName: "/homeAp9.jpg",
      
    },
  ];
  const buyNow=()=>{
  }
  const addToCart=()=>{
    
  }
  
  return (
    <div>
      
      <div className='productlist'>
        
        {homeApplianceData.map((data, index) => (
          <div className="product" key={index}>
            <img src={data.photoName} />
            <p>Price: {data.price}</p>
            <button onClick={buyNow}>BuyNow</button>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeAppliance;
