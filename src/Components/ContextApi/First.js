import React from 'react';
import { useContext } from 'react';
import MyContext from './MyContext';
import Navbar from '../Navbar';

const First = () => {
  const {common,setCommon}=useContext(MyContext);
  const handle=()=>{
    setCommon("First Component");
  }
  return (
    <>
    <div>
       <div>my name is first && {common}</div>
       <button onClick={handle}>Click me</button>
    </div>
    </>
  )
}

export default First;
