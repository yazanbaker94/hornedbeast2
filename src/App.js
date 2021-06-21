import React from "react";
import Header from "./Header";
import Main from "./Main";

import 'bootstrap/dist/css/bootstrap.min.css';


import Footer from "./Footer";


class App extends React.Component{
  render(){

    
   
    
    return(
      <div>
      <Header/>
      
      <Main/>
      <Footer/>

      </div>
    )
  }
}

export default App;