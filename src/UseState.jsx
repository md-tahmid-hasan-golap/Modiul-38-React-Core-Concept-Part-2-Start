import React, { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [count, setCount] = useState([0]);
  const handleButton = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div
      className="parents"
      style={{
        paddingBottom: "10px",
      }}
    >
      <h2>count : {count}</h2>
      <button onClick={handleButton}>Add Number</button>
    </div>
  );
};

export default UseState;
