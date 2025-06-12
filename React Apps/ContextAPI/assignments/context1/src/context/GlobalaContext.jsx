import { createContext, useState } from "react";

export let mycontext=createContext();

import React from 'react'

const GlobalaContext = (props) => {
    let [name,setName]=useState("Barry");
    let [age,setAge]=useState(20);
  return (
    <mycontext.Provider value={{name,setName,age,setAge}}>
        {props.children}
    </mycontext.Provider>
  )
}

export default GlobalaContext