import React from "react";
import Header from "./Header";
import Main from "./Main";
import hornsAnimalData from './hornsAnimalData.json'
import SelectedBeast from './SelectedBeast'

import 'bootstrap/dist/css/bootstrap.min.css';


import Footer from "./Footer";

let footer="Made by Yazan Baker";
let heading = "Horned Beasts";

class App extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
        hornsData:hornsAnimalData,
        show:false,
        modaldata:{},
    }
}
handleshow = (data) => {
    this.setState({
        show:true,
        modaldata:data,
    })
}
handleclose = ()=>{
    this.setState({
        show:false,
    })
}

  render(){

    
   
    
    return(
      <div>
      <Header heading={heading}/>
      <Main selectedmodal={this.handleshow } data={this.state.hornsData}  />
      <SelectedBeast  handleExit={this.handleclose} showdata={this.state.show } modaldata={this.state.modaldata} />
      <Footer footer={footer}/>

      </div>
    )
  }
}

export default App;