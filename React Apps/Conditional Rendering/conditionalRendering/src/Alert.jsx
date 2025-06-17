import React, { useState } from 'react'


const Alert = () => {
    let [alert,setAlert]=useState();
    let handleAlert=()=>{
        setAlert("Something went wrong !");
    }
    let handleClear=()=>{
        setAlert("");
    }
  return (
    <>
    <h1 className='text-5xl p-5'>Alert Task</h1>
    {
        alert && <h1 className='text-4xl text-red-500 p-5 mb-5' >{alert}</h1>
    }
    <button className={`mx-5 px-4 py-2 text-white text-xl rounded-2xl ${alert?"bg-green-500":"bg-red-500"}`}  onClick={alert?handleClear:handleAlert}>{alert?"Clear Alert":"Show Alert"}</button>
    </>
  )
}

export default Alert