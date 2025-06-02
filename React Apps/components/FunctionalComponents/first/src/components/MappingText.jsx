import React from 'react'

const MappingText = () => {
    let text=["Frontend is done using React","Backend is done using NodeJS and ExpressJs","Database is done using MongoDB","Deployment can be done on render and vercel"];
  return (
   text.map((ele,index) => {
    return <h1 key={index}>{ele}</h1>
})
  )}

export default MappingText