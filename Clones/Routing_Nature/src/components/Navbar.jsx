import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full flex justify-between px-[10vw] items-center py-7 absolute z-20 text-white text-[16px]'>
            <img className='h-12' src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-white.svg" alt="" />

            <ul className='flex gap-7 items-center'>
                <Link to={'/'}> <li>Home</li></Link>
                <Link to={'/about'}><li>About</li></Link>
                <Link to={'/services'}> <li>Services</li></Link>
                <Link to={'/contact'}><li>Contact</li></Link>
                <Link> <li className='border-1 rounded py-3 px-8 border-white'>202-555-0188</li></Link>
            </ul>
        </div>
    )
}

export default Navbar