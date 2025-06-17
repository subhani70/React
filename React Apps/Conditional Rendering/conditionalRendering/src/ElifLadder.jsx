import React from 'react'

const ElifLadder = () => {
    let age = Number(prompt("Enter age elif ladder"));

    if (age < 12) {
        return <h1>You are a kid</h1>
    }
    else if (age > 12) {
        return <h1>You are a teenager</h1>
    } else if (age > 18) {
        return <h1>You are an adult</h1>
    }
}

export default ElifLadder