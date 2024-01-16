import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    this.timerInterval = setInterval(() => {
      console.log("hello", this.state.time);
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  componentDidUpdate(prevprops, prevState) {
    if (prevprops.number !== this.props.number) {
      console.log("Component Update");
    }
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    // clearInterval(this.timerInterval);`
  }

  render() {
    return (
      <div>
        <h3>{this.state.time}</h3>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}
