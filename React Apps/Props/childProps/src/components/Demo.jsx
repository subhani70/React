import React from 'react'
import Test from './Test'
import Button from './Button'

const Demo = () => {
  return (
    <>
    <h1>Demo Component</h1>
    <Test>I'm a child prop ,you can access me using props.children property</Test>
    <Test><h1>I'm a child prop ,you can access me using props.children property</h1></Test>
    <Button>Login</Button> <br /> <br />
    <Button>LogOut</Button> <br /><br />
    <Button>SignUP</Button> <br /><br />
    <Button>Submit</Button> <br /><br />
    </>
  )
}

export default Demo