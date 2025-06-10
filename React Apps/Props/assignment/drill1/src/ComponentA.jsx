import React, { Component } from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
    let student={
        sname:" Mohan",
        course:"MERN",
        city:"Hyderabad"
    }
    let skills=["React","NodeJS","Express","MongoDB"];
  return (
   <ComponentB ename={"raj"} skills={skills} student={student} bool={true} />
  )
}

export default ComponentA