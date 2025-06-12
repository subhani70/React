import { createContext, useState } from "react";

export let mycontext=createContext();

import React from 'react'

const GlobalaContext = (props) => {
  let [user, setUser] = useState(false);
  return (
    <mycontext.Provider value={{user,setUser}}>
        {props.children}
    </mycontext.Provider>
  )
}

export default GlobalaContext