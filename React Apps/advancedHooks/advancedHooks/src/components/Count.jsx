import React from 'react'
import { memo } from 'react'

const Count = (props) => {
    let { text, data } = props
    console.log(text, data)
    return (
        <div>
            <h1>{text}-{data}</h1>
        </div>
    )
}

export default memo(Count)
