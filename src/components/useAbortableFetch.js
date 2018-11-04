import { useState, useEffect } from 'react';

const useAbortableFetch = url => {
  const [state, setState] = useState({
    json: null,
    loading: false,
    error: null,
    controller: null
  });

  useEffect(
    async () => {
      const controller = new AbortController();
      setState({ ...state, loading: true, controller });
      try {
        const rsp = await fetch(url, { signal: controller.signal });
        const json = await rsp.json();

        setState({ ...state, json, loading: false });
      } catch (err) {
        const error = err.name !== 'AbortError' ? err.message : null;

        setState({ ...state, error, loading: false });
      }

      return () => controller.abort();
    },
    [url]
  );

  return [
    state.json,
    state.loading,
    state.error,
    () => state.controller && state.controller.abort()
  ];
};

export default useAbortableFetch;
