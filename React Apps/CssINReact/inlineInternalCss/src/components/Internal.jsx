import React from 'react'

const Internal = () => {
    let mystyle={
        color:"red",
        backgroundColor:"black",
        padding:"15px"
    }
    let yourstyle={
        border:"2px solid blue",
        textAlign:"center",
        fontSize:"64px"
    }
  return (
    <>
  <h1 style={{...mystyle,...yourstyle}}>Inline CSS in React JS</h1>
    </>
  )
}

export default Internal