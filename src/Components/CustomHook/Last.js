import React from 'react';
import CustomHook from './CustomHook';

const Last = () => {
    const {count,increment}=CustomHook();
  return (
    <div>
        My count is {count}
        <button onClick={increment}>Click Me</button>
    </div>
  )
}
export default Last;
