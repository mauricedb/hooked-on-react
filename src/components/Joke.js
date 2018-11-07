import React from 'react';
import useAbortableFetch from './useAbortableFetch';

const Joke = () => {
  const { json: joke, loading, error, abort } = useAbortableFetch(
    'http://api.icndb.com/jokes/random/?limitTo=[nerdy]&escape=javascript'
  );

  if (loading) return 'Loading...';
  if (error) return 'Error: ' + error;
  if (!joke) return null;
  return <div>{joke.value.joke}</div>;
};

export default Joke;
