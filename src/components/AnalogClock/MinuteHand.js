import React from 'react';

const MinuteHand = ({ time }) => {
  const min = time.getMinutes();
  const minangle = min * 6;

  return (
    <line
      className="analog-clock-minutehand"
      x1="50"
      y1="50"
      x2="50"
      y2="20"
      transform={`rotate(${minangle}, 50, 50)`}
    />
  );
};

export default MinuteHand;
