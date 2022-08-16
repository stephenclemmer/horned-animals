import React from 'react';
import Item from './Item.js';

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