// MyProvider.js
import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [common, setCommon] = useState("Initial");

  return (
    <MyContext.Provider value={{ common, setCommon }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
