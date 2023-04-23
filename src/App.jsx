import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from './redux/store';

export const App = () => {
  const value = useSelector(state => state.myValue);

  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      <div>Counter: {value}</div>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
    </>
  );
};
