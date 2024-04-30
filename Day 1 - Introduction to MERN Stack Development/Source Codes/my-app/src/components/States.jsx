import React, { useState } from "react";

function States() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>Count = {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br />
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default States;
