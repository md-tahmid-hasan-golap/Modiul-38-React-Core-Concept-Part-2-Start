import { useState } from "react";

export default function Counter() {
  const counterStyel = {
    border: "2px solid yellow",
  };
  const [count, setCount] = useState([0]);

  const addButton = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div style={counterStyel}>
      <h3>Count : {count}</h3>
      <button onClick={addButton}>Add</button>
    </div>
  );
}
