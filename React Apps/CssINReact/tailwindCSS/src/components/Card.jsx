import React from 'react'
import Subhani from '../images/Subhani.jpeg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Card = () => {
    return (
        <>
            <main className='flex justify-center items-center h-[100vh] w-[100vw]'>
                <div>
                    <div className="h-[400px] w-[400px] border-1 rounded-[20px]">
                        <div className=" bg-blue-500 h-[40%] rounded-t-[20px] relative">
                            <img className='h-[100] w-[130px] rounded-[50%] absolute top-[80px] right-[135px]' src={Subhani} alt="" />
                        </div>
                        <div className='px-[50px]'>
                            <h1 className='text-3xl font-medium text-center mt-[50px]'>Frontend - developer</h1>
                            <h2 className='text-center'>Tech Job-Seeker</h2>
                            <div className='flex justify-center gap-3 mt-[15px]'>
                                <FaLinkedin className='size-[30px]' />
                                <FaGithub className='size-[30px]' />
                                <CiMail className='size-[30px]' />
                            </div>
                            <button className='rounded-[10px] ml-[100px] text-white px-[20px] bg-blue-600 py-2 mt-[15px]'>message</button>
                        </div>
                    </div></div>
            </main>
        </>
    )
}

export default Card