import { Component } from "react";

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            name:"Subhani",
            friends: ["vansh", "venu", "stark","barry"]
        };
    }
   
    render() {
        return (
            <div>
                <h1>I am {this.state.name}</h1>
            <hr />
            {
                this.state.friends.map((e,i)=>{
                    return <h2 key={i}>{e} is my friend</h2>
                })
            }
            </div>
        );
    }
}

export default Demo;