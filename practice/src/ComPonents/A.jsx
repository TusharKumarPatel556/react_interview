import React, { Component } from "react";
import B from "./B";

export const mycontext = React.createContext();

export default class A extends Component {
  constructor() {
    super();

    this.state = {
      name: "Tushar Patel",
      role: 20,
    };
  }

  handleClickContext = () => {
    this.setState({ role: this.state.role + 1 });
  };

  render() {
    const contextValue = {
      data: this.state,
      handlecheck: this.handleClickContext,
    };
    return (
      <div>
        <h1>Component A</h1>

        <mycontext.Provider value={contextValue}>
          <B />
        </mycontext.Provider>
      </div>
    );
  }
}
