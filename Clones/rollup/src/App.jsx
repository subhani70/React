import React, { useContext } from 'react'
import { CiSearch } from "react-icons/ci";
import { LuJapaneseYen } from "react-icons/lu";
import { RxSwitch } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { SiWebtrees } from "react-icons/si";
import { mycontext } from './context/ThemeContext';

const App = () => {
  let cards = [
    {
      icon: '🌍',
      title: 'The web, Node...',
      description: 'Rollup supports many output formats: ES modules, CommonJS, UMD, SystemJS and more. Bundle not only for the web but for many other platforms as well.',
    },
    {
      icon: '🌳',
      title: 'Tree-shaking',
      description: 'Rollup usSuperior dead code elimination based on deep execution path analysis with the tool  detect unused code, allowing you to ship smaller bundles with dead code eliminated.'
    },
    {
      icon: '🗡️',
      title: 'Code SplittingCode-splitting without overhead',
      description: 'Split code based on different entry points and dynamic imports by just using the import mechanism of the output format instead of customer loader code.'
    },
    {
      icon: '🔌',
      title: 'Powerful Plugins',
      description: 'An easy to learn plugin API that allows you to implement powerful code injections and transformations with little code. Adopted by Vite and WMR.'
    },
    {
      icon: '🛠️',
      title: 'Handles your special needs',
      description: 'Rollup is not opinionated. Many configuration options and a rich plugin interface make it the ideal bundler for special build flows and higher level tooling.'
    },
    {
      icon: '📦',
      title: 'The bundler behind Vite',
      description: 'Developing for the web? Vite pre-configures Rollup for you with sensible defaults and powerful plugins while giving you an insanely fast development server.'
    }
  ]

  let { theme, toggleTheme } = useContext(mycontext);

  return (
    // <>
    //   <nav className='sticky flex justify-between items-center py-[22px] px-[60px]  w-full top-0 border-b-1 border-gray-200 bg-white z-10' >
    //     <div className='flex justify-between items-center gap-5'>
    //       <div className='flex  items-center gap-2.5'>
    //         <img className='w-[30px]' src="https://rollupjs.org/rollup-logo.svg" alt="" />
    //         <h1 className=''> Rollup</h1>
    //       </div>
    //       <input className='bg-[#f6f6f7] px-2 py-2 rounded-[10px]' type="text" placeholder='search' /></div>
    //     <div className='flex gap-5'>
    //       <span>guide</span>
    //       <span>repl</span>
    //       <span>chat</span>
    //       <span>opencollective</span>
    //        <ul className=" flex gap-5 justify-evenly items-center w-full text-[14px]">
    //       <li className="text-[#E0E0E1] text-[20px]">|</li>
    //             <li><a href="" className="text-[20px] hover:text-[#3C3C43]"><LuJapaneseYen/></a></li>
    //             <li className="text-[#E0E0E1] text-[20px]">|</li>
    //             <li><a href="" className="text-[25px] hover:text-[#3C3C43]"><RxSwitch/></a></li>
    //             <li className="text-[#E0E0E1] text-[20px]">|</li>
    //             <li><a href="" className="text-[23px] hover:text-[#3C3C43]"><FaGithub/></a></li>
    //             <li><a href="" className="text-[23px] hover:text-[#3C3C43]"><SiWebtrees/></a></li></ul>
    //     </div>
    //   </nav>

    //   <main className='w-[80vw] mx-auto my-15 grid grid-cols-2 '>
    //     <div >
    //       <h1 className='text-[#ff6b35] font-bold text-[56px] leading-[64px]'>rollup.js</h1>
    //       <h1 className='text-[#3c3c43] font-bold text-[56px] leading-[64px]'>The JavaScript <br /> module bundler</h1>
    //       <p className='text-[#67676c] text-[24px] mt-2'>Compile small pieces of code into something larger <br /> and more complex</p>
    //       <div className='flex gap-3 mt-5 '>
    //         <button className='text-white bg-[#5672cd] px-3 py-2 rounded-[20px] font-medium'>Get Started</button>
    //         <button className='bg-[#ebebef] text-[#423c59] px-3 py-2 rounded-[20px] font-medium'>View on github</button>
    //       </div>
    //     </div>
    //     <div className='flex justify-center items-center'>
    //       <img src="https://rollupjs.org/rollup-logo.svg" alt="Rollup Logo" className='size-[300px] drop-shadow-[0_0_100px_#ff1100]' />
    //     </div>
    //   </main>

    //   <div className='grid grid-cols-3 gap-5 w-[80vw] mx-auto mb-[100px]'>
    //     {cards.map((e, i) => {
    //       return (
    //         <div key={i} className='h-[275px] bg-[#f6f6f7] p-5 rounded-[10px] hover:outline hover:outline-blue-500  relative'>
    //           <div className='h-[50px] w-[50px] bg-[#e7e8ec] rounded-[10px] flex justify-center items-center text-[25px]'>{e.icon}</div>
    //           <h1 className='text-[16px] text-[#3c3c43] mt-6 font-[600]'>The web, Node...</h1>
    //           <p className='text-[14px] text-[#676775] mt-3'>{e.description}</p>
    //           <h1 className='text-[16px] text-[#3451b2] mt-2 absolute bottom-6'>See all formats →</h1>
    //         </div>
    //       )
    //     })}
    //   </div>
    //   <hr className='opacity-7 ' />
    //   <footer className='text-center py-10'>
    //     <h1 className='text-[14px] text-[#75889b]'>Released under the MIT License. <br />
    //       Copyright © 2015-present Rollup contributors</h1>
    //   </footer>
    // </>
    <>
    <section className='h-100vh w-[100%] text-xl duration-700 '>
      <h1 className={` ${theme == "light" ? 'bg-red-500 text-black':'bg-black text-red-500'}`}>Hello World</h1>
      <button onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}>click</button>
      </section>
    </>
  )
}

export default App;