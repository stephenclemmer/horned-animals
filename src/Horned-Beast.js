import React from 'react';

class HornedBeast extends React.Component{
  
  constructor(props){
    super(props);
    // Create initial state: tied to the animals JSON fille
    this.state = 
      {clicks: 0}
  }

vote = () => {
  let clicks = this.state.clicks + 1;
  this.setState({clicks});
}

  render(){
    return(
      <div onClick={this.vote}>
    
        <h2>{this.props.title}</h2>
        
        <img 
        src={this.props.imageUrl} 
        alt={this.props.description}
        title={this.props.title}
        />


        <p>Votes: {this.state.clicks}</p>
        <p>{this.props.description}</p>

      </div>
    )
  }
}
export default HornedBeast;