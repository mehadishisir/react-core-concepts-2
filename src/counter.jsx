import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    // setCount(count + 1);
    const newCount = count + 1;
    setCount(newCount);
  };

  const counterStyle = {
    border: "2px solid aqua",
    padding: "10px",
    margin: "10px",
  };
  return (
    <div style={counterStyle}>
      <h2>Counter Component</h2>
      <p>This is a simple counter component.</p>
      <p>count :{count}</p>
      <button onClick={handleAdd}>Increment</button>
    </div>
  );
}
