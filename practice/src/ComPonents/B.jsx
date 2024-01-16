import React, { Component } from "react";
import { mycontext } from "./A";

export default class B extends Component {
  render() {
    return (
      <div>
        <h1>Component B</h1>
        <mycontext.Consumer>
          {({ data, handlecheck }) => (
            <>
              <h4>{data.role}</h4>
              <h3>{data.name}</h3>
              <button onClick={handlecheck} type="">
                click
              </button>
            </>
          )}
        </mycontext.Consumer>
      </div>
    );
  }
}
