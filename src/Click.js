import React, { Component } from 'react'
import './App.css'



export class click extends Component {

    constructor()
    {
        super()
        this.state = {
            users:null
        }
    }

    componentDidMount()
    {
        fetch('https://script.googleusercontent.com/macros/echo?user_content_key=YDV9MmjQYfG36MgdU8fIY8j1HZplHxZM7eQtPB3HO46zR9bONhcNTk_eEMfCQWUAhBbnKrtsi9NupLCWk8QSVJPkrmBEyWa-m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHMclrOu3rJUFqJwh4WY4laoMS6zkwtVBNTHGN9eZ5WZsAstNoXAZ7jW4ojdmDAfv1SsFbGVI4aT&lib=MZoW5iqVNUhx3yRKbHDiitILi0zpk96DG').then((response) =>{
            response.json().then((result) => {
                console.log(result);
                this.setState({users:result.Student})
            })
        })
    }

    

    render() {
        return (
            <div>
               {
                   this.state.users ?
                   this.state.users.map((item,i) =>

                   <div className="card" key={i}>
                       
                       <h1>{item.Name}</h1>
                       <p>{item.Subject}</p>
                   </div>
                   
                   )
                   :
                   null
               }
            </div>
        )
    }
}

export default click
