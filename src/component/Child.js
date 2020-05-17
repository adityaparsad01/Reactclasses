import React, { Component } from "react";
import GrandSon from "../GrandSon";
import "./App.css";

class Child extends React.Component {
  render() {
    return (
      <div className="child">
        <h1>My am Child</h1>
        <GrandSon />
        {/* <h1>{this.props.name}</h1> */}
        {/* <GrandSon nm={this.props.name} /> */}
      </div>
    );
  }
}

export default Child;
