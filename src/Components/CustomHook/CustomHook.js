import React from 'react';
import { useReducer } from 'react';
const intial={count : 0};
const reducer =(state,action)=>{
    if(action.type=='inc')
    return {count : state.count+1};
    throw new Error(`unhadled action type ${action.type}`);
}
const CustomHook = () => {
  const [state,dispatch]=useReducer(reducer,intial);
  const increment=()=>{
    dispatch({type : 'inc'});
  }
  return {count :state.count ,increment};
}

export default CustomHook
