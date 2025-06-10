import React from 'react'

const ComponentD = (props) => {
    console.log(props)
    return (<>
        <p>Skills</p>
        <p>{props.skills.map((e, i) => {
            return <li key={i} >{e}</li>
        })}</p>

        <p>Info</p>
        <h2>Name : {props.student.sname}</h2>
        <h2>Course : {props.student.age}</h2>
        <h2>FRom: {props.student.city}</h2>

        
    </>
    )
}

export default ComponentD