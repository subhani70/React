import React, { useReducer } from 'react'

let reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        // return { count: state.count + 1 }
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return 0;
    }

}
// let obj = { count: 0 };

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <>
            <h1>count:{state}</h1>
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>INCREMENT</button> <br /> <br />
            <button onClick={() => { dispatch({ type: "DECREMENT" }) }}>DECREMENT</button><br /> <br />
            <button onClick={() => { dispatch({ type: "RESET" }) }}>RESET</button>
        </>
    )
}

export default Counter;
