import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
 import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className='bg-gray-300'>
    <Navbar/>
    <Outlet/>
    <ToastContainer />
    
    </div>
  )
}

export default App
