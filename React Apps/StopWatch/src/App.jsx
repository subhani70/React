import React, { useEffect, useState } from 'react'

const App = () => {
  let [time, setTime] = useState(0);
  // let [min, setMins] = useState(0);
  // let [hrs, setHrs] = useState(0);
  let [flag, setFlag] = useState(false);

  useEffect(() => {
    let interval;
    if (flag) {

      interval = setInterval(() => {
        // if (time == 60) {
        //   setMins(min + 1);
        //   setTime(0)
        // }
        // if (min == 60) {
        //   setHrs(hrs + 1)
        //   setMins(0)
        // }
        setTime((e) => e + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    console.log(time);
    return () => clearInterval(interval);
  }, [flag,time]);

  const formatTime = () => {
    const hrs = String(Math.floor(time / 3600)).padStart(2, '0');
    const mins = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const secs = String(time % 60).padStart(2, '0');
    // console.log(time);
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <section className='flex flex-col justify-center items-center min-h-screen bg-gray-900'>

      <h1 className='text-8xl font-semibold text-center text-red-600 mb-5' >STOPWATCH</h1>
      <div className='text-[100px] text-center text-white font-bold mb-7'>
        <span>{formatTime()}</span>
      </div>
      <div className='text-[50px] text-center text-white flex gap-5 justify-center '>
        <button className="bg-yellow-500 border-1 border-black hover:bg-yellow-600 px-10 rounded-2xl" onClick={() => setFlag(true)} >Start</button>
        <button className="bg-blue-500 border-1 border-black hover:bg-blue-600 px-10 rounded-2xl" onClick={() => { setFlag(false) }} >Stop</button>
        <button onClick={()=>{setTime(0) , setFlag(false)}} className="bg-green-500 border-1 border-black hover:bg-green-600 px-10 rounded-2xl" >Reset</button>
      </div>
    </section>
  )
}

export default App