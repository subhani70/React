import React from 'react'
import FetchProducts from './components/FetchProducts'
import NavBar from './components/NavBar'
import SideNavBar from './components/SideNavBar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <NavBar />
      <section className='flex'>
        <SideNavBar />
        <article className='w-full'>
          <Outlet />
          
        </article>

      </section>
    </>)
}

export default App

