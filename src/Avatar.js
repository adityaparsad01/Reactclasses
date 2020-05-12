import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';

class Avatar extends Component{

    constructor(){
        super();
        this.state = {
            name : "Welcome to Avatar World"
        }
    }

    namechange(){
        this.setState({
            name : "Thanks For Subscribe"
        })
    }

        render() {

            const AvatarListarray = [
                {
                    id:1,
                    name:"Aditya",
                    work:"Engineer"
                },
                {
                    id:2,
                    name:"Ajit",
                    work:"Actor"
                },
                {
                    id:3,
                    name:"Arun",
                    work:"Student"
                },
                {
                    id:4,
                    name:"Sachin",
                    work:"Student"
                }
            ]
        
        
        
            // Map(callback(currentvalue, index, array) arg)
          const arrayavatarcard =  AvatarListarray.map( (avatarcard, i) => {
                return < AvatarList 
                key={AvatarListarray[i].id}
                name={AvatarListarray[i].name} 
                work={AvatarListarray[i].work}/>
            } )
        

            return (
                <div className="mainpage">
                    <h1>{this.state.name}</h1>
                    {arrayavatarcard}
                    <button className="ma4 bg-light-purple dib pa3 grow tc shadow-2" onClick= { () => this.namechange()}>Subscribe</button>
                </div>
            )
        }
    }


export default Avatar;