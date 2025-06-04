import { Component } from "react";

class Demo extends Component {
    constructor() {
        super();
        this.state = {
           name:"Rashed",
           newName:"Rashed Rockzz"
        };
    }

    giveNickName = () => {
        this.setState({ name: this.state.newName });
    };

    render() {
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <button onClick={this.giveNickName}>Give Nickname</button>
            </div>
        );
    }
}

export default Demo;