import React from 'react'
import { createContext, useState } from "react";

export let mycontext = createContext();


const GlobalaContext = (props) => {
const [user, setUser] = useState({
  name: "Mohan",
  age: 25,
});
 
  return (
    <mycontext.Provider value={{ user, setUser }}>
      {props.children}
    </mycontext.Provider>
  )
}

export default GlobalaContext;