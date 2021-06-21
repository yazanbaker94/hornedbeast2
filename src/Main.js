import React, { Component } from 'react'
import data from "./data.json"
import HornedBeast from './HornedBeast'
import 'bootstrap/dist/css/bootstrap.min.css';


export class Main extends Component {
    render(){
        return (
            <div >
                {
                    data.map(beast => {
                    return (
                        <HornedBeast
                        title={beast.title}
                        image_URL={beast.image_url}
                        description={beast.description}
                        />
                    )
                    } )
                }
                
            </div>
        )
        }
}

export default Main
