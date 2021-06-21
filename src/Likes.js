import React, { Component } from 'react';

class Likes extends Component {
    constructor(props){
        super(props);
        this.state={
            likes:props.likes,
        }
    }

    // changeSalary=()=>{
    //     this.setState({salary:this.props.raisRequest(this.state.salary)})
    // }
    changeLikes=()=>{
        this.setState(
            {
                likes:this.state.likes+1
            })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.state.likes}</h1>
                <button onClick={this.changeLikes}>ask for raise</button>
            </div>
        )
    }
}

export default Likes