import React, { useCallback, useState } from 'react'
import TitleCallback from './TitleCallback';
import Count from './Count';
import Button from './Button';

const ParentCallback = () => {
    let [age, setAge] = useState(0);
    let [sal, setSal] = useState(100);

    let handleIncrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age])
    let handleIncrementSal = useCallback(() => {
        setSal(sal + 10)
    }, [sal])
    return (
        <>
            <TitleCallback />
            <Count text="Age" data={age} />
            <Button handleclick={handleIncrementAge}>IncrementAge</Button>
            <Count text="Sal" data={sal} />

            <Button handleclick={handleIncrementSal}>IncrementSal</Button>
        </>
    )
}

// const ParentCallback = () => {
//     let [count, setCount] = useState(0);
//     return (
//         <>
//             <h1>Count : {count}</h1>
//             <button onClick={() => { setCount(count + 1) }}>Increment</button>
//             <TitleCallback/>
//         </>
//     )
// }

export default ParentCallback
