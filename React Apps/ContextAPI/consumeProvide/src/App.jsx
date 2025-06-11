import React, { useContext } from 'react'
import Demo from './components/Demo'
import Test from './components/Test'
import { mycontext } from './context/GlobalContext'

const App = () => {
  let { setCount } = useContext(mycontext)
  return (
    <>
      <Demo />
      <Test />
      <br /><br />
      <h1>From APP</h1>
      <button onClick={() => { setCount(0) }} >Reset</button>
    </>
  )
}

export default App