import React, { Component } from 'react'
import hornsAnimalData from './hornsAnimalData.json'
import HornedBeast from './HornedBeast'
import 'bootstrap/dist/css/bootstrap.min.css';


export class Main extends React.Component {
    render(){
        return (
            <div >
                {
                     this.props.data.map(item => {
                    return (
                        <HornedBeast
                        title={item.title}
                        img_url={item.image_url}
                        description={item.description}
                        modal={this.props.selectedmodal}
                    
                    />
                    )
                    } )
                }
                
            </div>
        )
        }
}

export default Main