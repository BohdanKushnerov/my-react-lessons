import { useState } from 'react';
import { addTask } from '../../redux/store';
import { useDispatch } from 'react-redux';

export const TodoForm = () => {
  const [state, setState] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setState(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    return dispatch(addTask(state));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={state} onChange={handleChange} />
      <button>Add Task</button>
    </form>
  );
};
