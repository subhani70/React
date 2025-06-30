import React from 'react'
import { useState, useEffect } from 'react';

const Timer = () => {
    let [time, setTime] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(new Date());

        }, 1000)
        // cleanup function
        return () => {
            clearInterval(timer);
        }
    }, [time])

    let displayTime = (title) => {
        let hours = `${title.getHours()}`.padStart(2, 0);
        let minutes = `${title.getMinutes()}`.padStart(2, 0);
        let seconds = `${title.getSeconds()}`.padStart(2, 0);
        return `${hours}:${minutes}:${seconds}`;
    }
    return (
        <>
            <h2 className='p-20  inline-block mt-70 ml-[35vw] rounded-4xl bg-green-300 text-8xl font-bold border-10 border-red-500 '>{displayTime(time)}</h2>
        </>
    )
}

export default Timer