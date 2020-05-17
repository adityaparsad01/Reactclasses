import React, { Component } from "react";
import "./App.css";
export class click extends Component {
  constructor() {
    super();
    this.state = {
      users: null,
    };
  }
  componentDidMount() {
    fetch(
      "https://script.google.com/macros/s/AKfycbxMRQFQYTj2qQd1YlM4NoWqn4JO9hXOJxrR01IPYla3xNsnseMx/exec"
    ).then((response) => {
      response.json().then((result) => {
        // console.log(result);
        this.setState({ users: result.Student });
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.users
          ? this.state.users.map((item, i) => (
              <div className="card" key={i}>
                <h1>{item.Name}</h1>
                <p>{item.Subject}</p>
                <p>{item.Course}</p>
                <p>{item.Year}</p>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default click;
