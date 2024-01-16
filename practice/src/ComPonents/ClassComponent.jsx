import React, { Component } from "react";
import Counter from "./Counter";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(`componentDidMount:When component render first time`);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        {this.state.count != 3 ? <Counter number={this.state.count} /> : "null"}
        <button
          onClick={() => {
            this.increment();
          }}
          type=""
        >
          Click Me
        </button>
      </div>
    );
  }
}
