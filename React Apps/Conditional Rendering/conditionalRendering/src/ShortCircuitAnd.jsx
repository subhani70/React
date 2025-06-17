import React from 'react'
import { useState } from 'react';

const ShortCircuitAnd = () => {
    let [isLogged,setIsLogged]=useState(false);

    let handleLogin=()=>{
        setIsLogged(!isLogged);
    }
  return (
    <>
     <h1>Welcome to our App</h1>
     {
        isLogged && <h1>Hi user, you are logged in</h1>
     }
     {
        !isLogged && <h1>You are not logged in buddy</h1>
     }
     <button  onClick={handleLogin}>{isLogged?"LogOut":"LogIn"}</button>

     <hr />

    </>
  )
}

export default ShortCircuitAnd