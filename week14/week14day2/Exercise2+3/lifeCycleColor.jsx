import React, { Component } from 'react';

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red', show: true };
  }

  componentDidMount() {
    console.log('Component has mounted with color:', this.state.favoriteColor);
    this.timerID = setInterval(() => this.changeColor(), 3000);
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    console.log('After update');
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'yellow' });
  };

  render() {
    return (
      <div>
        <h1>{this.state.favoriteColor}</h1>
      </div>
    );
  }
}

export default Color;