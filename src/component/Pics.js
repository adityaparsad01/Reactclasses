import React, { Component } from "react";
import "./test.css";

// const w = 300;
// const h = 300;
// const p = "photos";
// const web = "picsum";
// // const link = "http://localhost:3000/";

// const img = `https://${web}.${p}/${h}/${w}`;

export class Employee extends Component {
  render() {
    return (
      <div>
        <input type="text" id="input" />
        <button id="mybtn">fetch it</button>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default Employee;
