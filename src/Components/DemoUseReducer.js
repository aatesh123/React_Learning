import React from 'react'
import { useReducer } from 'react';
const DemoUseReducer = () => {
  const initialState={count :0 ,name:"aatesh"};
  const reducer = (state, action) => {
    if(action.type==='increment')
    return {count: state.count+1 ,name : "anurag"};
    else if(action.type==='decrement')
    return {count: state.count-1,name : "anatal"};
   return {count:state.count,name : 'aatesh'};
    }
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
       <button onClick={() => dispatch({ type: 'increment' })}>PLUS</button>
       <button onClick={() => dispatch({ type: 'decrement' })}>MINUS</button>
       <div>
        This is {state.count} and {state.name}
       </div>
    </div>
  );
};

export default DemoUseReducer
