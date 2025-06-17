import React from 'react'
import { useState } from 'react'

const App = () => {
  let [test,setTest]=useState(false)
  return (
    
    <div className='mt-[190px] border-1 border-black flex flex-col gap-5 justify-center items-center w-[500px] mx-auto py-5'>
      <h2 className='text-xl font-medium  text-red-500'>Ternary Example</h2>
      {test ? <p>This is shown because the condition is true.</p> : <p>This would show if false.</p>}

      <h2 className='text-xl font-medium  text-red-500'>&& Example</h2>
      {!test && <p>This will not be rendered because the condition is false.</p>}
      {test && <p>This will be rendered because the condition is true.</p>}

      <button className='border-1 border-black rounded-xl px-5 py-2 mt-10' onClick={()=>setTest(!test)}>Change</button>
    </div>
  )
}

export default App