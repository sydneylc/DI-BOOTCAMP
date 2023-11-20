import React, { Component } from 'react';
import Child from './Child';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  handleDelete = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        {this.state.show && <Child />}
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default App;