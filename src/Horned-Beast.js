import React from 'react';
import SelectedBeasts from './SelectedBeast.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component{
  
  constructor(props){
    super(props);
    // Create initial state: tied to the animals JSON fille
    this.state = 
      {clicks: 0}
      // {expand: false}
  }

vote = () => {
  let clicks = this.state.clicks + 1;
  this.setState({clicks});
}

modal = () => {
  console.log('You Did It!!!!')
  this.handleOpen()
}

  render(){
    return(
      <Card  style={{ width: '18rem' }}>
      <Card.Img 
        onClick={this.vote} 
        variant="top" 
        src={this.props.imageUrl} 
        alt={this.props.description} 
        title={this.props.title}/>
      <Card.Body>
        <Card.Title>{this.props.title}
        </Card.Title>
        <Card.Text>{this.props.description} 
          <div>
            <Button 
              onClick={this.modal}>
              Expand
            </Button>
          </div>
          <section>{this.state.clicks}
          </section>
        </Card.Text>
      </Card.Body>
    </Card>
    )
  }
}
export default HornedBeast;