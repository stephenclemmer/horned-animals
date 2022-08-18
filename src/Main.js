import React from 'react';
// import Grid from './Grid.js';
import HornedBeast from './Horned-Beast.js';


import animals from './data.json';



class Main extends React.Component{
  
  //Create state within the constructor function 
  constructor(props){
    super(props);
    // Create initial state: tied to the animals JSON fille
    this.state = 
    {array: animals}
  }
  

  render(){
    return(
      <main>
        {
          this.state.array.map((value) => 
          <HornedBeast 
          key={value._id}
          title={value.title} 
          imageUrl={value.image_url} 
          description={value.description}
          />
          )
        }
        
      </main>
    )
  }
}
export default Main;