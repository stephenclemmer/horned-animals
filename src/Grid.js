import React from 'react';
import Row from './Row.js';
import './grid.css'
class Grid extends React.Component {

  render(){
    return(
      <section className="grid">
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
      </section>
    )
  }
}

export default Grid;