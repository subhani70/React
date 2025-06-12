import { createContext, useState } from "react";

export let mycontext=createContext();

import React from 'react'

const GlobalaContext = (props) => {
    let [fruit, setFruit] = useState(["Apple", "Banana", "Cherry"]);
  return (
    <mycontext.Provider value={{fruit, setFruit}}>
        {props.children}
    </mycontext.Provider>
  )
}

export default GlobalaContext