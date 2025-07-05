import React, { useReducer } from 'react';

const initialState = { value: '', items: [] };

function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case 'SET_VALUE':
            console.log(state, action)
            return { ...state, value: action.change };
        case 'ADD_ITEM':
            if (state.value.trim() === '') return state;
            return { ...state, items: [...state.items, state.value], value: '' };
        case 'CLEAR_ITEMS':
            return { ...state, items: [] };
        default:
            return state;
    }
}

const Reducer1 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Tasks Done</h2>
            <input
                type="text"
                value={state.value}
                onChange={e => dispatch({ type: 'SET_VALUE', change: e.target.value })}
                placeholder="Enter item"
            />
            <button onClick={() => dispatch({ type: 'ADD_ITEM' })}>Add</button>
            <button onClick={() => dispatch({ type: 'CLEAR_ITEMS' })}>Clear List</button>

            {state.items.map((item, idx) => (
                <div key={idx}>{item}</div>
            ))}

        </div>
    );
};

export default Reducer1;