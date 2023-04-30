import { useDispatch } from 'react-redux';
import { toggleCompleted, deleteTask } from '../../redux/store';
import css from './Task.module.css';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleCompleted(task.id));
  const handleDelete = () => dispatch(deleteTask(task.id));

  return (
    <div className={css.taskContainer}>
      <input type="checkbox" onChange={handleToggle} checked={task.completed} />
      <p>{task.text}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
