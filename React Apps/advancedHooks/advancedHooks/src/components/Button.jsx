import React from 'react'
import { memo } from 'react'

const Button = (props) => {
    console.log(props)
    return (
        <div>
            <button onClick={props.handleclick}>{props.children}</button>
        </div>
    )
}

export default memo(Button);
