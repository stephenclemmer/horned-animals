import React from 'react';
import Form from 'react-bootstrap/Form';

class Formz extends React.Component{
   
  render() {
    return(
      <Form.Select onChange={this.props.changeHandler} aria-label="Default select example">
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