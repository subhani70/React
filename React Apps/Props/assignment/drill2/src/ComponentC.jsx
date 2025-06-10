import React from 'react'
import ComponentD from './ComponentD'

const ComponentC = (props) => {
  return (
    <ComponentD skills={props.skills} />
  )
}

export default ComponentC