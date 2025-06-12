import React, { useContext } from 'react'
import { mycontext } from '../context/GlobalaContext'

const Test = () => {
  let {fruit}=useContext(mycontext);
    return (
      <>
      {fruit.map((e,i)=>{
        return <h1 key={i}><li>Test : {e}</li></h1>
      })}
      </>
    )
}

export default Test