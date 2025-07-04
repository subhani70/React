import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <ul className='flex gap-5 px-10 py-2 justify-between items-center bg-gray-800 text-white'>
                <h1 className='text-5xl font-bold'>Subhani</h1>
                <div className='flex gap-5  py-5'>
                    <Link to="/"> <li className='text-xl bg-orange-500 px-5 py-2 rounded-4xl hover:bg-orange-400 '>Home </li></Link>
                    <Link to="/about">  <li className='text-xl bg-orange-500 px-5 py-2 rounded-4xl hover:bg-orange-400 '>About </li></Link>
                    <Link to="/contact"><li className='text-xl bg-orange-500 px-5 py-2 rounded-4xl hover:bg-orange-400 '>Contact </li></Link>
                    <Link to="/login"> <li className='text-xl bg-orange-500 px-5 py-2 rounded-4xl hover:bg-orange-400 '>Login </li></Link>
                    <Link to="/register"> <li className='text-xl bg-orange-500 px-5 py-2 rounded-4xl hover:bg-orange-400 '>Register </li></Link>
                </div>       </ul>
        </>
    )
}

export default Navbar