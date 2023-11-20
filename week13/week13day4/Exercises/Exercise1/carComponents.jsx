//PART ONE
import React from 'react';
import Car from './Components/Car';

const carInfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div>
      <Car carInfo={carInfo} />
    </div>
  );
}

//export default App;

import React from 'react';

function Car({ carInfo }) {
  return (
    <div>
      <h1>This car is {carInfo.model}</h1>
    </div>
  );
}

//export default Car;

//PART 2

import React, { useState } from 'react';

function Car({ carInfo }) {
  const [color, setColor] = useState(''); // Step 1

  return (
    <div>
      <h1>This car is {color} {carInfo.model}</h1> {/* Step 2 */}
    </div>
  );
}

//export default Car;

//PART 3

import React from 'react';

function Garage({ size }) {
  return (
    <div>
      <p>Who lives in my {size} Garage?</p>
    </div>
  );
}

//export default Garage;

import React, { useState } from 'react';
import Garage from './Garage'; // Step 1

function Car({ carInfo }) {
  const [color, setColor] = useState('');
  
  return (
    <div>
      <h1>This car is {color} {carInfo.model}</h1>
      <Garage size="small" /> {/* Step 2 */}
    </div>
  );
}

export default Car;


