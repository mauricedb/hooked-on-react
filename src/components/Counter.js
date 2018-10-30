import React, { useState, useEffect } from 'react';

function useTimedCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('setTimeout');
    const handle = setTimeout(() => setCount(count + 1), 1000);
    return () => {
      console.log('clearTimeout');
      clearTimeout(handle);
    };
  });

  return [count, () => setCount(count + 10), () => setCount(count - 10)];
}

const Counter = () => {
  const [count, increment, decrement] = useTimedCounter();

  return (
    <div>
      {count}
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
