import React from 'react'

const If = () => {
let age=Number(prompt("Enter your age :"))

if(age>18){
    return <h1>You are eligible for Voting</h1>
}else{
    return <h1>You are still a kid buddy</h1>
}


}

export default If;