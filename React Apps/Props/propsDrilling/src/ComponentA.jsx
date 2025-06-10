import React, { Component } from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
    let student={
        sname:"Raj",
        age: 22,
        city:"Hyderabad"
    }
    let skills=["JavaScript", "React", "HTML", "CSS"]
  return (
   <ComponentB ename={"raj"} skills={skills} student={student} bool={true} />
  )
}

export default ComponentA