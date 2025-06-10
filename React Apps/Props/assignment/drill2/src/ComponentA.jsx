import React, { Component } from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
  let skills=["JAVA", "REACT", "JAVASCRIPT", "HTML", "CSS"]
  return (
   <ComponentB  skills={skills}  />
  )
}

export default ComponentA