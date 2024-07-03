import React from 'react'
import { Outlet, outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return <>
  <Navbar/>
  <Outlet />
  </>
}

export default MainLayout
