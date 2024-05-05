import React from "react";

const ChildComponent = ({ onClick }) => {
  console.log("ChildComponent rendered");

  return <button onClick={onClick}>Increment</button>;
};

export default ChildComponent;
