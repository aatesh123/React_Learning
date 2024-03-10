import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './Components/ContextApi/First';
import Second from './Components/ContextApi/Second';
import MyProvider from './Components/ContextApi/MyProvider';
import Navbar from './Components/Navbar';
import Last from './Components/CustomHook/Last';
import DataListComponent from './Components/ErrorHandling/ErrorComponent';
import ClickCounter from './Components/Ref';
const intial={count : 0};
function App() {
  return (
    // <MyProvider>
    //   <BrowserRouter>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<First />} />
    //       <Route path="/first" element={<First />} />
    //       <Route path="/second" element={<Second />} />
    //       <Route path="/last" element={<Last />} />
    //     </Routes>
    //   </BrowserRouter>
    // </MyProvider>
   <ClickCounter /> 
  );
}

export default App;
