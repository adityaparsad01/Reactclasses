import React, {Component} from 'react';
import './App.css'

const flName = "Aditya"
const lname = "Kumar"
const age = 27
const name = (`My Name is ${flName} ${lname} and i am ${age} Year Old`);

const today = new Date()
const date = today.toLocaleDateString()
const time = today.toLocaleTimeString()

class App extends Component{
  render(){
    return (
      <div className="card">
    <h1> {name}</h1>
    <p>{`Today Date is ${date}`}</p>
    <p>{`Time is ${time}`}</p>
    </div>
    )
  }
}

export default App