import React from 'react';
import "./homeAppliance.css";


function HomeAppliance() {
  
  const homeApplianceData = [
    {
      name: "",
      price: 1000,
      photoName: "../../public/homeAp1.jpg",
      
    },
    {
      name: "",
      price: 7000,
      photoName: "../../public/homeAp2.jpg",
      soldOut: false,
    },
    {
      name: "",
      price: 3000,
      photoName: "../../public/homeAp3.jpg",
      
    },
    {
      name: "",
      price: 1500,
      photoName: "../../public/homeAp4.jpg",
      soldOut: false,
    },
    {
      name: "",
      price: 500,
      photoName: "../../public/homeAp5.jpg",
      
    },
    {
      name: "",
      price: 700,
      photoName: "../../public/homeAp6.jpg",
      soldOut: false,
    },
    {
      name: "",
      price: 3500,
      photoName: "../../public/homeAp7.jpg",
      
    },
    {
      name: "",
      price: 300,
      photoName: "../../public/homeAp8.jpg",
      soldOut: false,
    },
    {
      name: "",
      price: 1200,
      photoName: "../../public/homeAp9.jpg",
      
    },
  ];

  
  return (
    <div>
      <h1>Home Appliance</h1>
      <div className='productlist'>
        
        {homeApplianceData.map((data, index) => (
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

export default HomeAppliance;
