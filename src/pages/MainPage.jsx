import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import { Outlet } from 'react-router-dom'
import HomePage from './HomePage'

function MainPage() {
  return (
    <div>
      <Navbar/>
      <Menu/>
      <Outlet/>
    </div>
  )
}

export default MainPage
