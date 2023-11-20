
//PART ONE SO THAT I CAN PLAY AROUND W THE JSX THAT CAN PRODUCE THE REACT ELEMENTS
import React from 'react';

function App() {
// DISPLAY
  const helloWorldMessage = <p>Hello World!</p>;

// CONSTANT VARIABLE #1 :
  const myelement = <h1>I Love JSX!</h1>;

// CONSTANT VARIABLE #2 :
  const sum = 5 + 5;

  return (
    <div>
      {helloWorldMessage}
      {myelement}
      <p>React is {sum} times better with JSX</p>
    </div>
  );
}

export default App;


