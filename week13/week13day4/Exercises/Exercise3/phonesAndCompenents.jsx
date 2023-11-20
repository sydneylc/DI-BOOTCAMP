//PART 1

import React, { useState } from 'react';

//const Phone = () => {
  const [phoneInfo, setPhoneInfo] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });

  return (
    <div>
      <p>{phoneInfo.brand} {phoneInfo.model} ({phoneInfo.color}, {phoneInfo.year})</p>
    </div>
  );
//};

export default Phone;

//PART TWO

import React, { useState } from 'react';

const Phone = () => {
  const [phoneInfo, setPhoneInfo] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });

  const changeColor = () => {
    setPhoneInfo({ ...phoneInfo, color: 'blue' });
  };

  return (
    <div>
      <p>{phoneInfo.brand} {phoneInfo.model} ({phoneInfo.color}, {phoneInfo.year})</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

//export default Phone;

