import React from 'react'
import Uncontrolled from './components/Uncontrolled'
import Controlled from './components/Controlled'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
     <ToastContainer />
    {/* <Uncontrolled/> */}
    <Controlled/></>
  )
}

export default App