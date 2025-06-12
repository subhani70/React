import React, { useContext } from 'react'
import { mycontext } from '../context/GlobalaContext'

const Test = () => {
    let { name, age, setAge } = useContext(mycontext)
    return (
        <>
            <h1>demo:{name}</h1>
            <h1>demo:{age}</h1>
            <button onClick={() => setAge(age+1)}>Age+</button>
            <button onClick={() => setAge(age-1)}>Age-</button>

        </>
    )
}

export default Test