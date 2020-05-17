import React, { Component } from "react";
// import GrandGrandSon from "./GrandGrandSon";
import { MyContext } from "./App";

class GrandSon extends React.Component {
  render() {
    return (
      <div className="GrandSon">
        <h1>I Am GrandSon</h1>
        <MyContext.Consumer>{(data) => <h4>{data}</h4>}</MyContext.Consumer>
        {/* <h1>{this.props.nm}</h1> */}
        {/* <GrandGrandSon nam={this.props.nm} /> */}
      </div>
    );
  }
}
export default GrandSon;
