import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/> 
      {/* It is reponsible to render the children element */}
    </div>
  )
}

export default App
