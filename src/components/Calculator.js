import React, { useState } from 'react';

function useCalculator() {
  const [stack, setStack] = useState([]);

  return {
    result: stack[0] || 0,
    stack,
    append(digit) {
      const [current, ...rest] = stack;

      if (current) {
        setStack([+`${current}${digit}`, ...rest]);
      } else {
        const value = +digit;
        setStack([value, ...rest]);
      }
    },
    push() {
      setStack([0, ...stack]);
    },
    calculate(fn) {
      const [y, x, ...rest] = stack;
      if (x) {
        const result = fn(x, y);
        setStack([result, ...rest]);
      }
    }
  };
}

const Calculator = () => {
  const { append, push, result, stack, calculate } = useCalculator();

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <button onClick={() => append(1)}>1</button>
        <button onClick={() => append(2)}>2</button>
        <button onClick={() => append(3)}>3</button>
        <button onClick={() => append(4)}>4</button>
        <button onClick={() => append(5)}>5</button>
        <button onClick={() => append(6)}>6</button>
        <button onClick={() => append(7)}>7</button>
        <button onClick={() => append(8)}>8</button>
        <button onClick={() => append(9)}>9</button>
        <button onClick={() => append(0)}>0</button>
      </div>

      <div>
        <button onClick={() => push()}>Enter</button>
      </div>

      <div>
        <button onClick={() => calculate((x, y) => x + y)}>+</button>
        <button onClick={() => calculate((x, y) => x - y)}>-</button>
        <button onClick={() => calculate((x, y) => x * y)}>*</button>
        <button onClick={() => calculate((x, y) => x / y)}>/</button>
      </div>

      <div>Result: {result}</div>
      <div>Stack: {stack.join(' : ')}</div>
      <ol>
        {stack.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ol>
    </div>
  );
};

export default Calculator;
