import React from 'react';


class Counter extends React.Component{

  constructor(props){
    super(props);
    // initial state
    this.state = {
      count: 0
    }
  }
  
  increment = (e) => {
  let count = this.state.count + 1;
    this.setState({count});
  }
    
    decrement = (e) => {
      let count = this.state.count - 1;
      this.setState({count});
    }

  render(){
    return( 
      <div>
        <button onClick = {this.decrement}>-</button>
        <div>{this.state.count}</div>
        <button onClick = {this.increment}>+</button>
      </div>
    );
  }
}

<button onClick = {this.increment}>+</button>

export default Counter;