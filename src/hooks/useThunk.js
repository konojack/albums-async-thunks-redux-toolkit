import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

const useThunk = (thunkFunc) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      dispatch(thunkFunc(arg))
        .unwrap()
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [thunkFunc, dispatch]
  );

  return [runThunk, isLoading, error];
};

export default useThunk;
