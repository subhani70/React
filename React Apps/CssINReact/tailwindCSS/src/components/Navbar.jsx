import React, { Fragment } from 'react'

const Navbar = () => {
    let links=["Home", "About", "Contact", "Login", "Register"];
    return (
        <>
        <nav className='flex h-[60px] justify-between bg-[#efefef] px-[50px] '>
            <aside className='h-full w-[20%]'>
                <div className='h-full leading-[60px] text-2xl font-bold'>
                    logo
                </div>
            </aside>
            <aside className='w-full h-full flex items-center justify-end'>
                <ul className='flex gap-x-2 '>
                {
                    links.map((ele,ind)=>{
                        return <Fragment key={ind}>
                            <li className='px-6 bg-orange-400 py-2 rounded-[6px] text-white font-medium hover:bg-black cursor-pointer'>{ele}</li>
                        </Fragment>
                    })
                }
                </ul>

            </aside>

        </nav>

        </>)
}

export default Navbar