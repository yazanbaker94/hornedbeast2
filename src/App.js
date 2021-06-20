import React from "react";
import Header from "./Header";
import Main from "./Main";



import Footer from "./Footer";


class App extends React.Component{
  render(){

    let hornedBeast=[
      {
        image_url: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
        title: "UniWhal",
        description: "A unicorn and a narwhal nuzzling their horns",
        keyword: "narwhal",
        horns: 1
          
      },
      {
        image_url: "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
        title: "Rhino Family",
        description: "Mother (or father) rhino with two babies",
        keyword: "rhino",
        horns: 2
        
    },
    {
      image_url: "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
      title: "Unicorn Head",
      description: "Someone wearing a creepy unicorn head mask",
      keyword: "unicorn", 
      horns: 1
      
  },
    ]
   
    
    return(
      <div>
      <Header/>
      <Main  title={hornedBeast[0].title} image_url={hornedBeast[0].image_url} keyword={hornedBeast[0].keyword} description={hornedBeast[0].description} horns={hornedBeast[0].horns}/>
      <Main title={hornedBeast[1].title} image_url={hornedBeast[1].image_url} keyword={hornedBeast[1].keyword} description={hornedBeast[1].description} horns={hornedBeast[1].horns}/>
      <Main title={hornedBeast[2].title} image_url={hornedBeast[2].image_url} keyword={hornedBeast[2].keyword} description={hornedBeast[2].description} horns={hornedBeast[2].horns}/>
   
      <Footer/>

      </div>
    )
  }
}

export default App;