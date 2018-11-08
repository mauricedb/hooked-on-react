import React, { useContext } from 'react';
import TimeContext from './TimeContext';
import ThemeContext from './ThemeContext';
import AnalogClock from './AnalogClock';

const Clock = () => {
  const time = useContext(TimeContext);
  const theme = useContext(ThemeContext);

  return <AnalogClock time={time} theme={theme} />;
};

export default Clock;
