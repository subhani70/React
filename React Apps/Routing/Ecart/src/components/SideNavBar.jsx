import React from 'react'
import { Link } from 'react-router-dom'

const SideNavBar = () => {
  return (
    <>
      <aside className='min-w-[200px]  h-[calc(100vh-60px)] border-t-1 border-r-3 bg-black text-white border-t-white border-r-black'>
        <ul className='flex flex-col gap-y-2 mt-2 '>
            <li className='bg-white text-black px-2 ' >
                <Link className='w-full inline-block' to="/products">Products</Link>
            </li>
            <li className='bg-white text-black px-2' >
                Users
                {/* <Link>Users</Link> */}
            </li>
            <li className='bg-white text-black px-2' >
                Carts
                {/* <Link>Carts</Link> */}
            </li>
        </ul>
          
      </aside>
    </>
  )
}

export default SideNavBar
