import { Component } from "react";

class Demo extends Component {
    constructor() {
        super();
        this.state = {
          name:"Rashed",
          class:11,
          result:"fail",
        };
    }

    changeResult = () => {
        this.setState({ result: "pass" });
    };
  

    render() {
        return (
            <div>
             <h1>Hello {this.state.name}</h1>
                <h2>Class: {this.state.class}</h2>
                <h2>Result: {this.state.result}</h2>
                <button onClick={this.changeResult}>Change Result</button>
            </div>
        );
    }
}

export default Demo;