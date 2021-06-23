import 'bootstrap/dist/css/bootstrap.min.css';

import {Card,Button,Col, Image} from 'react-bootstrap';




import React, { Component } from 'react'

 class HornedBeast extends Component {

    constructor(props){
        super(props);
        this.state={
            votes:0,
            love:0
        }
    }

    changeVotes=()=>{
        this.setState(
            {
                votes:this.state.votes+1,
                love:this.state.love+1
            })
    }

    clickme = () => {
        this.props.modal({
            title: this.props.title,
            img_url: this.props.img_url,
            description: this.props.description
        })
    }

    render() {
        return (
        
            <div>
               

               <Col xs={12} md={6} sm={9} xl={4} style={{ paddingTop: "10vh", paddingLeft: "10vh" }} >
                <Card style={{ width: "80%", height: "100%" }} bg={'warning'}>
                    <Card.Img width={200}
                        height={280} onClick={this.changeVotes} variant="top" src={this.props.img_url} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title style={{ alignItems: 'center' }} >{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    
                        <Button style={{ width: "50%", marginLeft: "10vh" }} variant="info"> 💖 {this.state.votes}</Button>
                        <Button  style={{ width: "50%", marginTop: "2vh", marginBottom:'2vh', marginLeft: "10vh" }} variant="danger" onClick={this.clickme}> Click me </Button>
                   

                </Card>
            </Col>
            </div>
        
        )
    }
}

export default HornedBeast