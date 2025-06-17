import React from 'react'

const Nested = () => {
    let age=Number((prompt("Enter age for nested if")));
   if(age>18){
      if(age>60){
        return <h1>You will receive money from govt for being alive for more than 60 years </h1>
      }
      else{
        return <h1>You won't receive any mooney</h1>
      }
   } else{
    return <h1>you are still a kid</h1>
   }
  
}

export default Nested