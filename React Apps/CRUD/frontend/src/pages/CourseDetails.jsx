import React from 'react'
import { Link, useLocation } from 'react-router-dom';
const CourseDetails = () => {

    let loc = useLocation();
    // console.log(location);
    let { id, title, trainers, subjects, fees, img, location } = loc.state;
    return (
        <div className='min-h-screen bg-gray-300'>
            <div key={id} className='bg-white flex items-center flex-col w-[70vw] mx-auto mt-10 rounded-2xl py-10 hover:shadow-2xl transition-all duration-500'>
                <img src={img} className='h-[200px] w-[2002x]' alt="" />
                <div className='flex flex-col gap-5 w-full px-[100px] mt-5 '>
                    <h1 className='text-2xl font-bold text-center'>{title}</h1>
                    <h1 className='text'><span className='font-bold'>Trainers : </span>{trainers.map((e)=>{
                        return <span>{e+" "}</span>
                    })}</h1>
                    <h1 className='text'><span className='font-bold'>Subjects : </span>{subjects}</h1>
                    <h1 className='text'><span className='font-bold'>Location : </span>{location}</h1>
                    <h1 className='text'><span className='font-bold'>Fees :</span> ${fees}</h1>
                    <div className='flex gap-5'>

                        <button className='bg-blue-600 w-1/2 mx-auto  text-white px-6 py-2 text-xl rounded-xl hover:bg-blue-700'> Buy Course</button></div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails
