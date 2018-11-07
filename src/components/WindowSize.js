import React, { useEffect, useState } from 'react';

function getSize(target) {
  return {
    height: target.innerHeight,
    width: target.innerWidth
  };
}

const WindowSize = props => {
  const [size, setSize] = useState(getSize(window));
  const onResize = e => console.log('resize') || setSize(getSize(e.target));

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  });

  return <div>The window size is: {JSON.stringify(size)} </div>;
};

export default WindowSize;
