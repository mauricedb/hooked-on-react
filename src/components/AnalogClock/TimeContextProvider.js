import React from 'react';
import TimeContext from './TimeContext';
import useTime from './useTime';

const TimeContextProvider = ({ children }) => {
  const time = useTime(1000);

  return <TimeContext.Provider value={time}>{children}</TimeContext.Provider>;
};

export default TimeContextProvider;
