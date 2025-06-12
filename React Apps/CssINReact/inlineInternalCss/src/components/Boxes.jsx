import React from 'react'

const Boxes = () => {
  return (
   <>
   <section style={{height:"700px",width:"700px",border:"1px solid black",position:"relative"}}>
   <div style={{backgroundColor:"green",height:"200px",width:"200px",position:"absolute",left:"0px"}} ></div>
   <div style={{backgroundColor:"red",height:"200px",width:"200px",position:"absolute",right:"0px"}} ></div>
   <div style={{backgroundColor:"blue",height:"200px",width:"200px",position:"absolute",bottom:"0px"}} ></div>
   <div style={{backgroundColor:"black",height:"200px",width:"200px",position:"absolute",bottom:"0px",right:"0px"}} ></div>
   </section>
   </>
  )
}

export default Boxes