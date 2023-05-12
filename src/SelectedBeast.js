/* This is a React component class for rendering a header with a title passed as a prop. */
/* This is a React component that renders a modal with an image and title based on the props passed to
it. */
import React from 'react';
// import HornedBeast from './Horned-Beast.js'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component{
  

  render(){
    return(
       <Modal 
       show={this.props.showTheModal} 
       onHide={this.props.closeTheModal} 
      //  animation={false}
       >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beastData.description} 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img
          src={this.props.beastData.image_url} 
          alt={this.props.beastData.description} 
          title={this.props.beastData.title}/>
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