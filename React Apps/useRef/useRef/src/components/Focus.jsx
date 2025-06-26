 import React, { useEffect, useRef } from 'react'

const Focus = () => {
    let inputref = useRef();

    useEffect(() => {
        console.log(inputref.current.value);
        inputref.current.style.backgroundColor = "red";
        inputref.current.style.border = "transparent";
        inputref.current.style.outline = "none";
        inputref.current.focus();
    }, [])
    return (
        <>
            <form action="">
                <label htmlFor="">UserName:</label>
                <input type="text" ref={inputref} name="id" id="" />
                <input type="submit" name="" id="" />
            </form>
        </>
    )
}

export default Focus;