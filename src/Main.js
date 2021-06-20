import React, { Component } from 'react'

export class Main extends Component {
    render(){
        return (
            <div >
                 <h2>{this.props.title}</h2>
                 <img style={{width : "500px"}} src={this.props.image_url} alt={this.props.keyword} />;
                 <p>{this.props.description}</p>
                 <p>Number Of Horns: {this.props.horns}</p>


            </div>
        )
        }
}

export default Main
