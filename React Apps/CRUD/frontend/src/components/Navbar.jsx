import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-gray-900 text-white h-[70px] flex items-center justify-between px-[120px]'>
            <aside className='text-4xl font-bold'>COURSES</aside>

            <ul className='flex gap-10 pr-10'>
                <Link to="/createCourse"><li className='bg-orange-500 px-5 py-2 font-bold hover:text-orange-500 transition-all duration-500 hover:bg-white rounded-xl'>Create Course</li></Link>
                <Link to="/allCourses"><li className='bg-orange-500 px-5 py-2 font-bold hover:text-orange-500 transition-all duration-500 hover:bg-white rounded-xl'>All Courses</li></Link>
            </ul>

        </nav>
    )
}

export default Navbar
