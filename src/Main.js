import React from 'react';
import Grid from './Grid.js';
import HornedBeast from './Horned-Beast.js';

import animals from './data.json';



class Main extends React.Component{
  
  //Create state within the constructor function 
  constructor(props){
    super(props);
    // Create state tied to the animals JSON fille
    this.state = {array: animals}
  }

  render(){
    return(
      <main>
        {
        this.state.array.map((value) => 
        <HornedBeast 
          title={value.title} 
          imageUrl={value.image_url} 
          description={value.description}
          />
    )
  }






{/* 
<HornedBeast 
  title={"Bull"} 
  imageUrl={"https://via.placeholder.com/150"} 
  description={"Bull from Spain"}/> */}
      </main>
    )
  }
}
export default Main;