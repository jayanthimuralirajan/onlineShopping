


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import MainPage from './pages/MainPage';
import HomeAppliance from './pages/HomeAppliance';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import Jewelery from './pages/Jewelery';
import Cart from './pages/Cart';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import SearchResults from './pages/SearchResults';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="MainPage" element={<MainPage />}>
          <Route index element={<HomePage />} />
          <Route path="HomePage" element={<HomePage/>}/>
          <Route path="Cart" element={<Cart />} />
          <Route path="HomeAppliance" element={<HomeAppliance />} />
          <Route path="Mens" element={<Mens />} />
          <Route path="Womens" element={<Womens />} />
          <Route path="Jewelery" element={<Jewelery />} />
          <Route path="Profile" element={<Profile/>}/>
          <Route path="search" element={<SearchResults />} /> 
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
