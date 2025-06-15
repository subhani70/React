import React from 'react'

const App = () => {
  return (
    <>
    <nav className='sticky flex justify-between items-center py-[22px] px-[60px]  w-full top-0 border-b-1 border-gray-200 bg-white' >
      <div className='flex justify-between items-center gap-5'><h1>Rollup</h1> <input className='bg-[#f6f6f7] px-2 py-2 rounded-[10px]' type="text" placeholder='search' /></div>
      <div className='flex gap-5'>
        <span>guide</span>
        <span>repl</span>
        <span>chat</span>
        <span>opencollective</span>
        
        </div>
    </nav>

    <main className='w-[80vw] mx-auto my-15 grid grid-cols-2 '>
      <div > 
        <h1 className='text-[#ff6b35] font-bold text-[56px] leading-[64px]'>rollup.js</h1>
        <h1 className='text-[#3c3c43] font-bold text-[56px] leading-[64px]'>The JavaScript <br /> module bundler</h1>
        <p className='text-[#67676c] text-[24px] mt-2'>Compile small pieces of code into something larger <br /> and more complex</p>
        <div className='flex gap-3 mt-5 '>
          <button className='text-white bg-[#5672cd] px-3 py-2 rounded-[20px] font-medium'>Get Started</button>
          <button className='bg-[#ebebef] text-[#423c59] px-3 py-2 rounded-[20px] font-medium'>View on github</button>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <img src="https://rollupjs.org/rollup-logo.svg" alt="Rollup Logo" className='size-[300px]' />
      </div>
    </main>

    <div className='grid grid-cols-3 gap-5 mt-10 w-[80vw] mx-auto mb-[100px]'>
      <div className='bg-[#f6f6f7] p-4 rounded-[10px]'>
      <div className='h-[50px] w-[50px] bg-[#e7e8ec] rounded-[10px]'></div>
      <h1 className='text-[16px] text-[#3c3c43] mt-6'>The web, Node...</h1>
      <h1 className='text-[14px] text-[#676775] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque deleniti ullam ea magni illo expedita rem reprehenderit praesentium harum.</h1>
      <h1 className='text-[16px] text-[#3451b2] mt-2'>See all formats </h1>
      </div>
      <div className='bg-[#f6f6f7] p-4 rounded-[10px]'>
      <div className='h-[50px] w-[50px] bg-[#e7e8ec] rounded-[10px]'></div>
      <h1 className='text-[16px] text-[#3c3c43] mt-6'>The web, Node...</h1>
      <h1 className='text-[14px] text-[#676775] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque deleniti ullam ea magni illo expedita rem reprehenderit praesentium harum.</h1>
      <h1 className='text-[16px] text-[#3451b2] mt-2'>See all formats </h1>
      </div>
      <div className='bg-[#f6f6f7] p-4 rounded-[10px]'>
      <div className='h-[50px] w-[50px] bg-[#e7e8ec] rounded-[10px]'></div>
      <h1 className='text-[16px] text-[#3c3c43] mt-6'>The web, Node...</h1>
      <h1 className='text-[14px] text-[#676775] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque deleniti ullam ea magni illo expedita rem reprehenderit praesentium harum.</h1>
      <h1 className='text-[16px] text-[#3451b2] mt-2'>See all formats </h1>
      </div>
      <div className='bg-[#f6f6f7] p-4 rounded-[10px]'>
      <div className='h-[50px] w-[50px] bg-[#e7e8ec] rounded-[10px]'></div>
      <h1 className='text-[16px] text-[#3c3c43] mt-6'>The web, Node...</h1>
      <h1 className='text-[14px] text-[#676775] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque deleniti ullam ea magni illo expedita rem reprehenderit praesentium harum.</h1>
      <h1 className='text-[16px] text-[#3451b2] mt-2'>See all formats </h1>
      </div>
      <div className='bg-[#f6f6f7] p-4 rounded-[10px]'>
      <div className='h-[50px] w-[50px] bg-[#e7e8ec] rounded-[10px]'></div>
      <h1 className='text-[16px] text-[#3c3c43] mt-6'>The web, Node...</h1>
      <h1 className='text-[14px] text-[#676775] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque deleniti ullam ea magni illo expedita rem reprehenderit praesentium harum.</h1>
      <h1 className='text-[16px] text-[#3451b2] mt-2'>See all formats </h1>
      </div>
      <div className='bg-[#f6f6f7] p-4 rounded-[10px]'>
      <div className='h-[50px] w-[50px] bg-[#e7e8ec] rounded-[10px]'></div>
      <h1 className='text-[16px] text-[#3c3c43] mt-6'>The web, Node...</h1>
      <h1 className='text-[14px] text-[#676775] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque deleniti ullam ea magni illo expedita rem reprehenderit praesentium harum.</h1>
      <h1 className='text-[16px] text-[#3451b2] mt-2'>See all formats </h1>
      </div>
      <div className='bg-[#f6f6f7] p-4 rounded-[10px]'>
      <div className='h-[50px] w-[50px] bg-[#e7e8ec] rounded-[10px]'></div>
      <h1 className='text-[16px] text-[#3c3c43] mt-6'>The web, Node...</h1>
      <h1 className='text-[14px] text-[#676775] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque deleniti ullam ea magni illo expedita rem reprehenderit praesentium harum.</h1>
      <h1 className='text-[16px] text-[#3451b2] mt-2'>See all formats </h1>
      </div>
      <div className='bg-[#f6f6f7] p-4 rounded-[10px]'>
      <div className='h-[50px] w-[50px] bg-[#e7e8ec] rounded-[10px]'></div>
      <h1 className='text-[16px] text-[#3c3c43] mt-6'>The web, Node...</h1>
      <h1 className='text-[14px] text-[#676775] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque deleniti ullam ea magni illo expedita rem reprehenderit praesentium harum.</h1>
      <h1 className='text-[16px] text-[#3451b2] mt-2'>See all formats </h1>
      </div>
      <div className='bg-[#f6f6f7] p-4 rounded-[10px]'>
      <div className='h-[50px] w-[50px] bg-[#e7e8ec] rounded-[10px]'></div>
      <h1 className='text-[16px] text-[#3c3c43] mt-6'>The web, Node...</h1>
      <h1 className='text-[14px] text-[#676775] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque deleniti ullam ea magni illo expedita rem reprehenderit praesentium harum.</h1>
      <h1 className='text-[16px] text-[#3451b2] mt-2'>See all formats </h1>
      </div>


    </div>

    <hr className='opacity-7 '/>

    <footer className='text-center py-10'>
      <h1 className='text-[14px] text-[#75889b]'>Released under the MIT License. <br />

Copyright © 2015-present Rollup contributors</h1>
    </footer>
    </>
  )
}

export default App