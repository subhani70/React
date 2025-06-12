import React, { useContext } from 'react'
import { mycontext } from '../context/GlobalaContext'

const Demo = () => {
    let {user,setUser}=useContext(mycontext);
  return (
    <>
      <h1>Demo:Hello {user?"Barry":"guest"}</h1>
      <button onClick={()=>setUser(!user)}>{user?"Logout":"Login"}</button>
    </>
  )
}

export default Demo