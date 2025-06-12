import React, { useContext } from 'react'
import { mycontext } from '../context/GlobalaContext'

const Demo = () => {
    let {fruit,setFruit}=useContext(mycontext);
  return (
    <>
    {fruit.map((e,i)=>{
      return <h1 key={i}><li>Demo : {e}</li></h1>
    })}
    <button onClick={()=>setFruit([...fruit,"Mango","Orange"])}>Add Fruits</button>
    </>
  )
}

export default Demo