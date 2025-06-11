import React from 'react'
import { useContext } from 'react';
import { mycontext } from '../context/GlobalContext'

const Test = () => {
    let { count, setCount } = useContext(mycontext);
    return (
        <>
            <h1>Count from Test : {count}</h1>
            <button onClick={() => setCount(count - 1)} >Decrease</button>
        </>
    )
}

export default Test