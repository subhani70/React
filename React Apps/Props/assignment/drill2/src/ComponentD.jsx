
import React from 'react'
import './ComponentD.css'

const ComponentD = (props) => {
    console.log(props)
    return (<>
        <p>{props.skills.map((e, i) => {
            return <div key={i}>{e}</div>
        })}</p>
    </>
    )
}

export default ComponentD