import React from 'react';

class Counter extends  React.Component {
  constractor (props) {
    super(props);
    this.state = {count : 5 };
    this.handelDecrement = this.handelDecrement.bind(this);
    this.handelIncrement = this.handelIncrement.bind(this);
 }

 handelDecrement () {
  this.seState((curState) => {
    return {count: curState.count + 1 };
  });
 }

 handelIncrement () {
  this.seState((curState) => {
    return {count: curState.count - 1 };
 });
}




 render () {
  return (
    <div>
      <button onclick={this.handelDecrement}></button>
      <span>{this.state.count}</span>
      <button onclick={this.handelIncrement}></button>
    </div>
    );
    }
}

export default Counter;