import React, { useState } from 'react'
import ExpensiveMemo from './ExpensiveMemo';

const Increment = () => {
    let [count, setCount] = useState(0);
    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={() => { setCount(count + 1) }}>Increase</button>
            <button onClick={() => { setCount(count - 1) }}>Decrease</button>

            <br />
            <ExpensiveMemo />
        </div>
    )
}

export default Increment
