import React, { Component } from 'react'

const w = 200
const h = 500
const p = "photos"
const web = "picsum"
const link = "http://localhost:3000/"

const img = `https://${web}.${p}/${h}/${w}`

export class Employee extends Component {
    render() {
        return (
            <div>
                <h1>Hi</h1>
                <a href={link} target="_link">
                    <img src={img} alt=""/>
                </a>
            </div>
        )
    }
}

export default Employee
