import React from 'react';
import Grid from './Grid.js';
import HornedBeast from './Horned-Beast.js';

class Main extends React.Component{
  

  render(){
    return(
      <main>
        <HornedBeast 
          title={"Unicorn"} 
          imageUrl={"https://via.placeholder.com/150"} 
          description={"Unicorn from Narnia"}/>
        <HornedBeast 
          title={"Bull"} 
          imageUrl={"https://via.placeholder.com/150"} 
          description={"Bull from Spain"}/>
      </main>
    )
  }
}
export default Main;