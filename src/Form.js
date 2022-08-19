import React from 'react';

let names = ['Stephen', "Andy", "Jim", "Ken"];

class Formz extends React.Component{

  
  constructor(props) {
    super(props);
    this.state = {
      words: '', 
      people: names
    }
  }
  
  handleChange = (event) => {
    let filter = event.target.value.toLowerCase();
    // This is filtering the global data set and re-setting state with that subset. State only contains what we're planning to render out.
    let filteredPeople = names.filter(name => name.toLowerCase().includes(filter))
    this.setState({people: filteredPeople});
  }
   
  render() {
      return(
        <>
          <form>
            <select onChange={this.handleChange}>
              <option></option>
              <option>n</option>
              <option>e</option>
              <option>s</option>
            </select>
            <input onChange={this.handleChange}/>
          </form>

          <ul>
            {
              this.state.people.map((person, idx) =>
                <li key={idx}>{person}</li>
              )
            }
          </ul>
        </>
      )
    }

}

export default Formz;