import React from 'react'
import ComponentD from './ComponentD'

const ComponentC = (props) => {
  return (
    <ComponentD ename={props.ename} skills={props.skills} student={props.student} bool={props.bool} />
  )
}

export default ComponentC