import React from "react";
import Header from "./Header";
import Main from "./Main";
import hornsAnimalData from './hornsAnimalData.json'
import SelectedBeast from './SelectedBeast'
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterForm from './FilterForm'


import Footer from "./Footer";

let footer="Made by Yazan Baker";
let heading = "Horned Beasts";

class App extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
        hornsData:hornsAnimalData,
        hornsFiltredArr : hornsAnimalData,
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

updateData = (value) => {
  this.setState({ 
    hornsFiltredArr: value })
}



  render(){

    
 
    
    return(
      <div>
      <Header heading={heading}/>
      <FilterForm
                    filterData={this.updateData}
                    hornsData={this.state.hornsData}

                />
      <Main selectedmodal={this.handleshow } data={this.state.hornsFiltredArr} 
            updateData={this.updateData} /> 
      <SelectedBeast  handleExit={this.handleclose} showdata={this.state.show } modaldata={this.state.modaldata} />
      <Footer footer={footer}/>

      </div>
    )
  }
}

export default App;