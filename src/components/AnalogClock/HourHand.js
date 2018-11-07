import React from 'react';

const HourHand = ({ time }) => {
  const min = time.getMinutes();
  const hour = (time.getHours() % 12) + min / 60;
  const hourangle = hour * 30;

  return (
    <line
      className="analog-clock-hourhand"
      x1="50"
      y1="50"
      x2="50"
      y2="24"
      transform={`rotate(${hourangle}, 50, 50)`}
    />
  );
};

export default HourHand;
