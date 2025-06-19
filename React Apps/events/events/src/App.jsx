import React from 'react'
import ExpandingCards from './components/ExpandingCards'

const App = () => {
  let greet=()=>{
    console.log("Good Morning")
  }
  return (
    <>
    <h1>Welcome</h1>
    <button onClick={greet}>Click Me</button>
    <h2 onDoubleClick={()=>console.log("Double Click event")}>Double click event</h2>
    <ExpandingCards/>
    </>

  )
}

export default App