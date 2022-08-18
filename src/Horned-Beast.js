import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


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
      <Card onClick={this.vote} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description} 
        <section>{this.state.clicks}</section>
        </Card.Text>
      </Card.Body>
    </Card>
     
     
      // <div onClick={this.vote}>
    
      //   <h2>{this.props.title}</h2>
        
      //   <img 
      //   src={this.props.imageUrl} 
      //   alt={this.props.description}
      //   title={this.props.title}
      //   />


      //   <p>Votes: {this.state.clicks}</p>
      //   <p>{this.props.description}</p>

      // </div>
      
    )
  }
}
export default HornedBeast;