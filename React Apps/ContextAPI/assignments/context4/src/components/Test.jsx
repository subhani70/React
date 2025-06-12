import React, { useContext } from 'react'
import { mycontext } from '../context/GlobalaContext'

const Test = () => {
    let { user} = useContext(mycontext);
    return (
        <>
            <h1>Test:Hello {user ? "Barry" : "guest"}</h1>
        </>
    )
}

export default Test