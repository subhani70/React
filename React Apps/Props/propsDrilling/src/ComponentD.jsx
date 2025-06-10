import React from 'react'

const ComponentD = (props) => {
    console.log(props)
    return (<>
        <h1>{props.ename}</h1>
        <p>Array</p>
        <p>{props.skills.map((e, i) => {
            return <h2 key={i} >{e}</h2>
        })}</p>

        <p>Object</p>
        <h2>My name is {props.student.sname}</h2>
        <h2>I'm {props.student.age}</h2>
        <h2>I live in {props.student.city}</h2>

        <p>Boolean</p>
        {props.bool ? <h2>True</h2> : <h2>False</h2>}
    </>
    )
}

export default ComponentD