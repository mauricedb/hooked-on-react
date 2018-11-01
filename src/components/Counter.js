import React, { useState, useEffect } from 'react';

function useTime(interval = 1000) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(
    () => {
      // console.log('setInterval 2');
      const handle = setInterval(
        () => setTime(new Date().toLocaleTimeString()),
        interval
      );
      return () => {
        // console.log('clearInterval 2');
        clearInterval(handle);
      };
    },
    [interval]
  );

  return time;
}

function useTimedCounter(interval = 1000) {
  const [count, setCount] = useState(0);
  useEffect(
    () => {
      console.log('setInterval useTimedCounter');

      const handle = setInterval(() => setCount(c => c + 1), interval);

      return () => {
        console.log('clearInterval useTimedCounter');
        clearInterval(handle);
      };
    },
    [interval]
  );

  return [count, () => setCount(count + 10), () => setCount(count - 10)];
}

const Counter = () => {
  const [interval, setInterval] = useState(1000 * 2);
  const [count, increment, decrement] = useTimedCounter(interval);
  const time = useTime();

  return (
    <div>
      {count}
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={() => setInterval(interval + 1000)}>Interval</button>
      </div>
      {time}
    </div>
  );
};

export default Counter;
