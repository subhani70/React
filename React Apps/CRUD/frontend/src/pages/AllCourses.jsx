import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AllCourses = () => {
    let [courses, setCourses] = useState([]);
    let [pages, setPages] = useState(1);

    let getCourse = async () => {
        let res = await fetch("http://localhost:3000/courses");
        let data = await res.json();
        setCourses(data);
    }
    console.log(courses)
    useEffect(() => {
        getCourse()
    }, [])
    return (
        < >
            <div className='bg-gray-300 min-h-screen grid gap-8 grid-cols-2 mx-auto p-10 px-[100px]'>
                {
                    courses.slice(pages * 6 - 6, pages * 6).map((course) => {
                        let { id, title, img } = course;
                        //  trainers, subjects, fees, location,
                        return <div key={id} className='bg-white flex items-center flex-col h-[55vh] rounded-2xl py-10 hover:shadow-2xl transition-all duration-500'>
                            <img src={img} className='h-[200px] w-[2002x]' alt="" />
                            <div className='flex flex-col gap-5 w-full px-[100px] mt-5 '>
                                <h1 className='text-2xl font-bold text-center'>{title}</h1>
                                {/* <h1 className='text'><span className='font-bold'>Trainers : </span>{trainers}</h1>
                                <h1 className='text'><span className='font-bold'>Subjects : </span>{subjects}</h1>
                                <h1 className='text'><span className='font-bold'>Location : </span>{location}</h1>
                                <h1 className='text'><span className='font-bold'>Fees :</span> ${fees}</h1> */}
                                <div className='flex gap-5'>

                                    <Link state={course} to="/showCourse" className='bg-blue-600 w-1/2 mx-auto  text-white text-center px-6 py-2 text-xl rounded-xl hover:bg-blue-700'> View More</Link>
                                    <button className='bg-blue-600 w-1/2 mx-auto  text-white px-6 py-2 text-xl rounded-xl hover:bg-blue-700'> Edit</button></div>
                            </div>
                        </div>
                    })
                }

            </div>
            <section className='flex justify-center items-center py-10'>
                {
                    [...Array(Math.ceil(courses.length / 6))].map((_, i) => {
                        return <span onClick={() => { setPages(i + 1) }} className={`inline-block rounded px-5 py-2 ${pages == i + 1 ? "bg-red-400 text-white" : ""}`} key={i}>{i + 1}</span>
                    })
                }
            </section>
        </ >
    )
}

export default AllCourses
