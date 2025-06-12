import React, { useContext } from 'react'
import { mycontext } from '../context/GlobalaContext'

const Test = () => {
    let { user,setUser } = useContext(mycontext)
    return (
        <>
            <h1>Test:{user.name}</h1>
            <h1>Test:{user.age}</h1>
            <button onClick={() => setUser({...user,name:"Sekhar"})}>Update User</button>
        </>
    )
}

export default Test