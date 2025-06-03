import { Component } from "react";

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            nickname:"Mohan"
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };
    reset = () => {
        this.setState({ count: 0 });
        this.setState({nickname:"Mohan"});
    };
    displayNickname = () => {
       this.setState({nickname:"Mota bhai"})
    }

    render() {
        console.log("I will re-render"); //when state changes,component will re-render
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <h1>Name: {this.state.nickname}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.displayNickname}>Change Name</button>
            </div>
        );
    }
}

export default Demo;