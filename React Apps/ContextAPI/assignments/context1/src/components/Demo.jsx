import React, { useContext } from 'react'
import { mycontext } from '../context/GlobalaContext'

const Demo = () => {
    let {name,age,setName}=useContext(mycontext);
  return (
    <>
    <h1>demo:{name}</h1>
    <h1>demo:{age}</h1>
    <button onClick={()=>setName("Allen")}>name</button>
    </>
  )
}

export default Demo