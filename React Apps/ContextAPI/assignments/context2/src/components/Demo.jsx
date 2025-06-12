import React, { useContext } from 'react'
import { mycontext } from '../context/GlobalaContext'

const Demo = () => {
    let {user,setUser}=useContext(mycontext);
  return (
    <>
    <h1>demo:{user.name}</h1>
    <h1>demo:{user.age}</h1>

    <button onClick={()=>setUser({...user,age:22})}>age</button>

    </>
  )
}

export default Demo