import React, { useState } from 'react';

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);

  return [count, () => setCount(count + 1)];
}

function useCalculator() {
  const [stack, setStack] = useState([]);

  return {
    result: stack[0] || 0,
    stack: stack.map(v => +v || 0),
    append(digit) {
      let [current, ...rest] = stack;
      if (stack.pushValue) {
        rest = [current, ...rest];
        current = 0;
      } else if (stack.replaceValue) {
        current = 0;
      }

      if (current) {
        setStack([`${current}${digit}`, ...rest]);
      } else {
        const value = `${digit}`;
        setStack([value, ...rest]);
      }
    },
    push() {
      let [current, ...rest] = stack;
      const newStack = [current, current, ...rest];
      newStack.replaceValue = true;
      setStack(newStack);
    },
    calculate(fn) {
      const [y, x, ...rest] = stack;
      if (x) {
        const result = fn(+x || 0, +y || 0);
        const newStack = [result, ...rest];
        newStack.pushValue = true;
        setStack(newStack);
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
        <button onClick={() => append('.')}>.</button>
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
