//PART 1
import React from 'react';

const Events = () => {
  const clickMe = () => {
    alert('I was clicked');
  };

  return (
    <div>
      <button onClick={clickMe}>Click me</button>
    </div>
  );
};

//export default Events;

//PART 2
import React from 'react';

//const Events = () => 
{
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert('keyEnter2 ' + e.target.value);
    }
  };

  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} />
    </div>
  );
};

//export default Events;

//PART 3

import React, { useState } from 'react';

//const Events = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleButton = () => {
 setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={toggleButton}>{isToggleOn ? 'on' : 'off'}</button>
    </div>
  );
//};

//export default Events;

