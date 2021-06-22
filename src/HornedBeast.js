import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

import CardColumns from 'react-bootstrap/CardColumns'


import React, { Component } from 'react'

 class HornedBeast extends Component {

    constructor(props){
        super(props);
        this.state={
            votes:0,
        }
    }

    changeVotes=()=>{
        this.setState(
            {
                votes:this.state.votes+1
            })
    }

    render() {
        return (
        
            <div>
               
               <CardColumns>
               <Card>
            
                <Card.Img onClick={this.changeVotes} style={{width: "200px"}} src={this.props.image_URL} alt={this.props.title}/>
                <Card.Body>

                <Card.Title>{this.props.title}</Card.Title>
                <p>{this.state.votes}💕</p>
                <Card.Text> {this.props.description}</Card.Text>

                </Card.Body>

                </Card>
                </CardColumns>
                

            </div>
        
        )
    }
}

export default HornedBeast
