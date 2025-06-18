import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import MustExplore from './components/MustExplore'
import Explore from './components/Explore'
import Courses from './components/Courses'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
   <Navbar/>
   <Hero/>
   <Cards/>
   <MustExplore/>
   <Explore/>
   <Courses/>
   <Footer/>
   </>
  )
}

export default App