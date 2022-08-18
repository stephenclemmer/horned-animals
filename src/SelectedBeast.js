import React from 'react';
import HornedBeast from './Horned-Beast.js'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{
  
  constructor(props){
    super(props);
      this.state = 
      {show: false}
  }
 
  handleClose = () => {
    this.setState({show: false})
  }
  
  handleOpen = () => {
    this.setState({show: true})
  }
  

  render(){
    return(
       <Modal 
       show={this.state.show} 
       onHide={this.handleClose} 
       animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.description} 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body 
          src={this.props.imageUrl} 
          alt={this.props.description} 
          title={this.props.title}>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    )
  }



}
export default SelectedBeast;