import React from 'react'
import ExpandingCards from './components/ExpandingCards'
import Task from './components/task'
import Task2 from './components/Task2'


const App = () => {
  let greet=()=>{
    console.log("Good Morning")
  }

  let successpay=()=>{
    console.log("Payment is Successfull")
  }

  let currentBalance=()=>{
    console.log("400000")
  }

  let debitedMessage=()=>{
    console.log("amount debited successfully")
  }
  return (
    <>
    <h1>Welcome</h1>
    <button onClick={greet}>Click Me</button>
    <h2 onDoubleClick={()=>console.log("Double Click event")}>Double click event</h2>
    {/* <ExpandingCards/> */}

    <hr />
    {/* multiple evnts */}
    <h2>Multiple handle events</h2>
    <br />
    <button onClick={()=>{successpay(); currentBalance(); debitedMessage()}}>Multievnts</button>
    <br /><br />
    <button onClick={successpay} onMouseEnter={debitedMessage} onMouseLeave={currentBalance}>Onclick,mouseEnter</button>

    <hr />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <Task/>
    <br /><br /><br /><br /><br />
    <h1>Task 2</h1>
    <Task2/>
    </> 

  )
}

export default App