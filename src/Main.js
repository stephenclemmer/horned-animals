/* The `Main` class component renders a form and a list of `HornedBeast` components that can be filtered by the number of horns, and displays a modal with details of the selected `HornedBeast`component. */
import React from 'react';
import HornedBeast from './Horned-Beast.js';
import animals from './data.json';
import SelectedBeast from './SelectedBeast.js';
import Formz from './Form.js'


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
  
/* `handleClose` is a function that sets the `showModal` state to `false`. This is used to close the
modal that displays the details of the selected beast when a user clicks on the close button or
outside the modal. */
  handleClose = () => {
    this.setState({showModal: false})
  }
  
/* `handleOpen` is a function that sets the `showModal` state to `true`. This is used to open the modal
that displays the details of the selected beast when a user clicks on a `HornedBeast` component. */
  handleOpen = () => {
    this.setState({showModal: true})
  }

/* `selectBeast` is a function that is called when a user clicks on a `HornedBeast` component. It takes
in a `beast` object as a parameter, which contains information about the specific beast that was
clicked on. */
  selectBeast = (beast) => {
    this.setState({selectedBeast: beast})
    this.handleOpen()
  }

/* `handleChange` is a function that is called when the user selects a new value in the dropdown menu
in the `Formz` component. It takes in an `event` object as a parameter, which contains information
about the user's interaction with the dropdown menu. */
  handleChange = (event) => {
    let filter = Number(event.target.value);
    // change the value from a string to a number

    let filteredBeasts = this.state.array.filter(beast => beast.horns === filter)
    this.setState({beastSelection: filteredBeasts});
  }

  render(){
    return(
      <>
        {
          <Formz
          changeHandler={this.handleChange}
          />
        }


{/* Renders all of the beasts at the outset of the program, and changes those rendered based on how it has been filtered by number of horns */}
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
        
{/* This code is conditionally rendering the `SelectedBeast` component based on the value of
`this.state.selectedBeast`. If `this.state.selectedBeast` is truthy, meaning it contains an object
with information about a selected beast, then the `SelectedBeast` component is rendered with the
props `showTheModal`, `closeTheModal`, and `beastData` passed in. If `this.state.selectedBeast` is
      falsy, meaning no beast has been selected, then the `SelectedBeast` component is not rendered. */}
      
        {
        this.state.selectedBeast && 
        <SelectedBeast
        showTheModal={this.state.showModal}
        closeTheModal={this.handleClose}
        beastData={this.state.selectedBeast}
        />
        }
      </>
    )
  }
}
export default Main;