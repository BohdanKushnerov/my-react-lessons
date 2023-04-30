import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { changeFilter } from '../../redux/store';

export const AppBar = () => {
  const [selectedValue, setSelectedValue] = useState('all');
  const state = useSelector(state => state.tasks);

  const dispatch = useDispatch();

  const count = state.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  const handleChange = e => {
    setSelectedValue(e.target.value);
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <p>Active tasks: {count.active}</p>
      <p>Completed tasks: {count.completed}</p>
      <div>
        <input
          type="radio"
          id="all"
          name="contact"
          value="all"
          checked={selectedValue === 'all'}
          onChange={handleChange}
        />
        <label htmlFor="all">All</label>

        <input
          type="radio"
          id="active"
          name="contact"
          value="active"
          checked={selectedValue === 'active'}
          onChange={handleChange}
        />
        <label htmlFor="active">Active</label>

        <input
          type="radio"
          id="completed"
          name="contact"
          value="completed"
          checked={selectedValue === 'completed'}
          onChange={handleChange}
        />
        <label htmlFor="completed">Completed</label>
      </div>
    </>
  );
};
