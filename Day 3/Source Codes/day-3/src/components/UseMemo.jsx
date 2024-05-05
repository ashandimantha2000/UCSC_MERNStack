import React, { useState, useMemo } from 'react';
// Simulates an expensive calculation
function expensiveCalculation(num) {
  console.log('Calculating...');
  // In a real-world scenario, this could be a more CPU-intensive task
  return num * 2;
}

export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // useMemo is used to memorize the result of expensiveCalculation
  // It will only recompute the doubled value when 'number' changes
  const doubledValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Doubled Value: {doubledValue}</p>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
      <p>Other State: {otherState}</p>
      <button onClick={() => setOtherState(otherState + 1)}>Increment Other State</button>
    </div>
  );
}