import React, { Component } from "react";
import Child from "./Child";
import "./App.css";
import { GrandSon } from "./GrandSon";

export const MyContext = React.createContext();

class Perent extends React.Component {
  state = {
    name: "Aditya",
  };

  render() {
    return (
      <div className="Perent">
        <h1>I Am Perent</h1>
        <MyContext.Provider value={this.state.name}>
          <Child />
        </MyContext.Provider>
        {/* <h1>{this.state.name}</h1> */}
        {/* <Child name={this.state.name} /> */}
      </div>
    );
  }
}

export default Perent;
