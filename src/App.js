import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>

      <ChildComponent />
    </div>
  );
}
/**
 * 1. Why ChildComponent re-render
 * 2. How to prevent re-render ChildComponent
 * 3. What is disadvantaged of your solution? Do you have alternative solution? What is it?
 */
