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
      <main>
      /* This code is rendering the `Formz` component, which is a form that allows the user to filter
      the displayed `HornedBeast` components based on the number of horns they have. The
      `changeHandler` prop is passed to the `Formz` component, which is a function that is called
      when the user selects a new value in the dropdown menu. This function updates the
      `beastSelection` state to only include `HornedBeast` components with the selected number of
      horns. */
        {
          <Formz
          changeHandler={this.handleChange}
          />
        }

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