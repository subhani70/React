import React, { useReducer } from 'react';

const initialState = { isVisible: false };

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE':
            return { ...state, isVisible: !state.isVisible };
        default:
            return state;
    }
}

let Reducer2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <button onClick={() => dispatch({ type: 'TOGGLE' })}>
                {state.isVisible ? 'Hide' : 'Show'} Message
            </button>
            {state.isVisible && <p >Use Reducer is a nice hook</p>}
        </>
    );
}

export default Reducer2;
