import React from 'react'
import hulk from './img/hulk.webp'
const App = () => {
  return (
    <div className='bg-black min-h-screen p-25'>
      <div className='rounded-xl py-8 items-center justify-around w-[400px] h-[600px] bg-[#1f1f1f] mx-auto flex flex-col text-white'>
        <img src={hulk} alt="" className='h-[80px] w-[80px] rounded rounded-[80px]' />
        <h1 className='text-2xl'>Jessica Randall</h1>
        <h2 className='text-xl text-yellow-200'>London, United Kingdom</h2>
        <p className='text-gray-300'>"Frontend developer and avid reader"</p>
        <div className='flex justify-center items-center bg-[#333333] py-6 font-bold h-[20px] w-[300px] rounded-xl'>Github</div>
        <div className='flex justify-center items-center bg-[#333333] py-6 font-bold h-[20px] w-[300px] rounded-xl'>Frontend Mentor</div>
        <div className='flex justify-center items-center bg-[#333333] py-6 font-bold h-[20px] w-[300px] rounded-xl'>LinkedIn</div>
        <div className='flex justify-center items-center bg-[#333333] py-6 font-bold h-[20px] w-[300px] rounded-xl'>Twitter</div>
        <div className='flex justify-center items-center bg-[#333333] py-6 font-bold h-[20px] w-[300px] rounded-xl'>Instagram</div>

      </div>
    </div>
  )
}

export default App