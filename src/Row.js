import React from 'react';
import Item from './Item.js';
import './row.css'

class Row extends React.Component {

  render(){
    return(
      <div className="row">
        <Item/>
        <Item/>
        <Item/>
      </div>
    )
  }
}

export default Row;