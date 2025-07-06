import React from 'react'
import Home from '../pages/Home'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <section className='flex justify-between py-5'>
            <ul className='flex items-center gap-5'>
                <Link to="/"> <li>Home</li></Link>
                <Link to="/mobile"> <li>Mobile</li></Link>
                <Link> <li>Wearables</li></Link>
                <Link> <li>Smart Home</li></Link>
                <Link> <li>Life style</li></Link>
                <Link> <li>POCO</li></Link>
            </ul>
        </section>
    )
}

export default Navbar
