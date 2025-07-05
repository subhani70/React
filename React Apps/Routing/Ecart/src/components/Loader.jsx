import React from 'react'
import { RingLoader } from 'react-spinners'
const Loader = () => {
    return (
        <div className='h-[calc(100vh-60px)] flex items-center justify-center w-full'>
            <RingLoader color="#74d6e3"   size={150}/>

        </div>
    )
}

export default Loader
