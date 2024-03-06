import React, { useEffect, useState } from 'react'




// The useEffect hook is a built-in React hook that enables you to perform side effects in function
//  components. Side effects can include data fetching, subscriptions, manual DOM manipulation, and more.

//useffect run before main things that's why we fetch data through api
//it contain one function which return a function and dependecy array
//suppose id passing thorugh props if id changes then we useEffect wil run again.we can put id in dependeci array.
const DemoUseEffect = () => {
  const [name,setname]=useState("aatesh");
  const [count,setcount]=useState(0);
  const handle=()=>{
    if(name==='aatesh')
    {
      console.log('hum hai');
    return "aatesh";
    
    }
    return "anurag";
  }
  useEffect(()=>{
    setname("anurag")
  },[])
  return (
    <div>
       I name is {handle()} 
    </div>
  )
}

export default DemoUseEffect
