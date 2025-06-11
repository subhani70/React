import React from 'react'
import { useContext } from 'react'

import { mycontext } from '../context/GlobalContext'

const Demo = () => {
    let { count, setCount ,name,setName} = useContext(mycontext);
    return (
        <>
            <h1>From Demo: {name}</h1>
            <button onClick={() => setName("Sekhar")} >Change Name</button>
            <h1>From Demo:{count}</h1>
            <button onClick={() => setCount(count + 1)} >Increase</button>
        </>
    )
}

export default Demo