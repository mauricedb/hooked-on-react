import React from 'react';

const SecondHand = ({ time }) => {
  const sec = time.getSeconds();
  const secangle = sec * 6;

  return (
    <line
      className="analog-clock-secondhand"
      x1="50"
      y1="50"
      x2="50"
      y2="16"
      transform={`rotate(${secangle}, 50, 50)`}
    />
  );
};

export default SecondHand;
