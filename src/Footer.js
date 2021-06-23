import React, { Component } from 'react'

export class Footer extends Component {
    render(){
        return (
            <div>
                <h1 style={{backgroundColor : "grey", textAlign : "center"}}>{this.props.footer}</h1>
            </div>
        )
        }
}

export default Footer
