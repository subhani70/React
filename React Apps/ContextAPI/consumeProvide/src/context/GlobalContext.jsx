import React, { createContext, useState } from 'react'

export let mycontext=createContext()
const GlobalContext = (props) => {
    let [count,setCount]=useState(0);
    let [name,setName]=useState("Mohan");
  return (
    <mycontext.Provider value={{count,setCount,name,setName}}>
        {props.children}
        </mycontext.Provider>
  )
}

export default GlobalContext