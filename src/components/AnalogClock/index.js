import React, { useContext } from 'react';
import TimeContext from './TimeContext';
import AnalogClock from './AnalogClock';
// import useTime from './useTime';

// const Clock = () => {
//   const time = useTime(1000);

//   return <AnalogClock time={time} />;
// };

const Clock = () => {
  const time = useContext(TimeContext);

  return <AnalogClock time={time} />;
};

export default Clock;
