import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }), () => {
      if (this.state.counter === 5) {
        throw new Error('I crashed!');
      }
    });
  };

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>{this.state.counter}</h1>
      </div>
    );
  }
}

export default BuggyCounter;