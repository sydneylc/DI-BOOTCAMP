// App.js
import React, { Component } from 'react';
import FormComponent from './FormComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: 'male', 
      destination: 'Japan', 
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: inputValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

  
    const { firstName, lastName, age, gender, destination } = this.state;
    const url = `http://localhost:3000/?firstName=${firstName}&lastName=${lastName}&age=${age}&gender=${gender}&destination=${destination}`;


    window.location.href = url;
  };

  render() {
    return (
      <div>
        <FormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
        />
      </div>
    );
  }
}

export default App;

