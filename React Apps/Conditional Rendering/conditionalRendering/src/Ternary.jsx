import React from 'react'


const Ternary = () => {
    let ages=Number(prompt("Enter age for conditional rendering"))
  return (
    <>
    {
        ages>18?<h1>eligible for voting</h1>:<h1>Not eligible kid</h1>
    }
    </>
  )
}

export default Ternary