import { useEffect, useState } from 'react';

const useTime = interval => {
  const [time, setTime] = useState(new Date());

  useEffect(
    () => {
      const handle = setInterval(() => setTime(new Date()), interval);

      return () => clearInterval(handle);
    },
    [interval]
  );
  return time;
};

export default useTime;
