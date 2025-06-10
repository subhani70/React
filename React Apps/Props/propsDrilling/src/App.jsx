import React from 'react'
import ComponentA from './ComponentA'


const App = () => {
  return (
    //Passing the props from one component to another component in multiple level and so on is called props drilling.
   <ComponentA/>
  )
}

export default App