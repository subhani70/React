import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = (props) => {
  return (
    <ComponentC ename={props.ename} skills={props.skills} student={props.student} bool={props.bool} />
  )
}

export default ComponentB