import React from 'react';

function Car({ carInfo }) {
  return (
    <div>
      <h1>This car is {carInfo.model}</h1>
    </div>
  );
}

export default Car;