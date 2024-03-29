/* The Formz class is a React component that renders a dropdown menu for selecting the quantity of horns. */
import React from 'react';
import Form from 'react-bootstrap/Form';

class Formz extends React.Component{
   
  render() {
    return(
      <Form.Select onChange={this.props.changeHandler}>
        <option>Select Horn Quantity</option>
        <option value="1">One Horn</option>
        <option value="2">Two Horns</option>
        <option value="3">Three Horns</option>
        <option value="100">Lots of Horns</option>
      </Form.Select>
    )
  }

}

export default Formz;