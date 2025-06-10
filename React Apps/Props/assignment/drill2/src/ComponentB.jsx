import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = (props) => {
  return (
    <ComponentC skills={props.skills}  />
  )
}

export default ComponentB