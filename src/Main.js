import React from 'react';
// import Grid from './Grid.js';
import HornedBeast from './Horned-Beast.js';
import animals from './data.json';
import SelectedBeast from './SelectedBeast.js';
import Formz from './Form.js'

let names = ['Stephen', "Andy", "Jim", "Ken"];

class Main extends React.Component{
  
  //Create state within the constructor function 
  constructor(props){
    super(props);
    // Create initial state: tied to the animals JSON fille
    this.state = {
      array: animals,
      showModal: false,
      selectedBeast: null,
      beastSelection: animals
    }
  }
  
  handleClose = () => {
    this.setState({showModal: false})
  }
  
  handleOpen = () => {
    this.setState({showModal: true})
  }

  selectBeast = (beast) => {
    this.setState({selectedBeast: beast})
    this.handleOpen()
  }

  handleChange = (event) => {
    let filter = Number(event.target.value);
    // change the value from a string to a number

    let filteredBeasts = this.state.array.filter(beast => beast.horns === filter)
    this.setState({beastSelection: filteredBeasts});
  }

  render(){
    return(
      <main>
        {
          <Formz
          changeHandler={this.handleChange}
          />
        }

     

{/* Render filtered beasts */}

        {
          this.state.beastSelection.map((beast) => 
          <HornedBeast 
          key={beast._id}
          title={beast.title} 
          imageUrl={beast.image_url} 
          description={beast.description}
          handleSelectBeast={() => this.selectBeast(beast)}
          />
          )
        }
        
        {
        this.state.selectedBeast && 
        <SelectedBeast
        showTheModal={this.state.showModal}
        closeTheModal={this.handleClose}
        beastData={this.state.selectedBeast}
        />
        }
      </main>
    )
  }
}
export default Main;