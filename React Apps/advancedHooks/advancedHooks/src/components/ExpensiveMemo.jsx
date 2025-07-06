import React, { useMemo } from 'react'

const ExpensiveMemo = () => {
    // let sum = 0;
    // let res = () => {
    //     for (let i = 1; i < 10000000; i++) {
    //         sum += i;
    //     }
    //     return sum;
    // }
    // let solution = res();

    console.log("rendering")

    let optimized = useMemo(() => {
        let sum = 0;

        for (let i = 1; i < 10000000; i++) {
            sum += i;
        }
        return sum;
    }, [])
    return (
        <div>
            {/* <h1>{solution}</h1> */}
            <h1>{optimized}</h1>
        </div>
    )
}

export default ExpensiveMemo
