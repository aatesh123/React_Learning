import React, { useRef } from 'react';

const ClickCounter = () => {
  const countRef = useRef(0); // Initialize ref with initial count value

  const handleClick = () => {
    countRef.current++; // Increment count value
    console.log('Button clicked ' + countRef.current + ' times');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ClickCounter;
