import React, { useState } from 'react'
import { memo } from 'react'

const TitleCallback = () => {
    console.log("rerendering......")
    console.log("❤️❤️❤️❤️")
    let [age, setAge] = useState(0)
    return (
        <>
            <h1>Marvel is the best Franchise</h1>
            <h1>age: {age}</h1>
            <button onClick={() => { setAge(age + 1) }}>increase age</button>
        </>
    )
}

export default memo(TitleCallback)
