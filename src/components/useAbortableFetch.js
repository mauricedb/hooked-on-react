import { useState, useEffect } from 'react';

const fetchData = async (url, signal, setState) => {
  try {
    const rsp = await fetch(url, { signal });
    const json = await rsp.json();

    setState(oldState => ({
      ...oldState,
      json,
      loading: false
    }));
  } catch (err) {
    const error = err.name !== 'AbortError' ? err.message : null;

    setState(oldState => ({
      ...oldState,
      error,
      loading: false
    }));
  }
};

const useAbortableFetch = url => {
  const [state, setState] = useState({
    json: null,
    loading: false,
    error: null,
    controller: null
  });

  useEffect(
    () => {
      const controller = new AbortController();
      setState({
        json: null,
        loading: true,
        error: null,
        controller
      });

      fetchData(url, controller.signal, setState);

      return () => controller.abort();
    },
    [url]
  );

  return {
    json: state.json,
    loading: state.loading,
    error: state.error,
    abort: () => state.controller && state.controller.abort()
  };
};

export default useAbortableFetch;
