// PART THREE PLAYING AROUND WITH REACT//
import React, { Component } from 'react';
import './PlayWReact.css'; 
const style_header = {
  color: 'white',
  backgroundColor: 'DodgerBlue',
  padding: '10px',
  fontFamily: 'Arial',
};

class Exercise extends Component {
  render() {
    return (
      <div>
        {/* Part I - HTML Tags */}
        <h1 style={{ ...style_header, color: 'red', backgroundColor: 'lightblue' }}>Hello React!</h1>
        <p className="para">This is a paragraph.</p>
        <a href="https://example.com">This is a link</a>
        <form>
          <label>
            Input:
            <input type="text" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <img src="path/to/image.jpg" alt="An example image" />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;


