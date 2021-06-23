import React, { Component } from 'react'

export class Header extends Component {
    render(){
        return (
            <div>
                <h1 style={{backgroundColor : "yellow", textAlign : "center"}}>{this.props.heading}</h1>
            </div>
        )
        }
}

export default Header
