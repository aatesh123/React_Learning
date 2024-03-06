import React from "react";
import Second from "./Props";
const First = () => {
  const a = ["aatesh", "bhagirath", "chandu"];
  return (
    <>
     {a.map((value, index) => (
        <Second key={index} name={value} />
      ))}
    </>
  );
};

export default First;
