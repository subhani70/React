import React from 'react'
import Counter from './components/Counter'
import Increment from './components/Increment'
import ParentCallback from './components/ParentCallback'

const App = () => {
  return (
    <div>
      {/* <Counter/> */}
      {/* <Increment /> */}
      <ParentCallback />
    </div>
  )
}

export default App
