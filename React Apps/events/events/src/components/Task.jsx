import React from 'react'

const Task = () => {
    const handleClick = () => {
        alert('Button clicked');
    };

    const handleInputChange = (e) => {
        console.log( e.target.value);
    };

    const handleMouseOver = () => {
        console.log('Mouse is hovered on div');
    };
    return (
        <>
            <button onClick={handleClick}>Click Me</button>
            <input type="text" onChange={handleInputChange} placeholder="Type buddy" />
            <div onMouseOver={handleMouseOver} >
                Hover over this div
            </div>
        </>
    )
}

export default Task;