// Second.js
import React, { useContext } from 'react';
import MyContext from './MyContext';
import Navbar from '../Navbar';

const Second = () => {
  const contextValue = useContext(MyContext);

  const handle = () => {
    contextValue.setCommon("Second Component");
  };

  return (
    <>
    <div>
      <div>My name is second & {contextValue.common}</div>
      <button onClick={handle}>Click me</button>
    </div>
    </>
  );
};

export default Second;
