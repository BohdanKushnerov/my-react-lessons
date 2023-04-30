import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';

export const TodoList = () => {
  const tasks = useSelector(state => state.tasks);
  const filter = useSelector(state => state.filters.status);

  console.log(filter);

  const getVisibleTasks = (tasks, filter) => {
    if (filter === 'active') {
      return tasks.filter(task => !task.completed);
    } else if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    } else {
      return tasks;
    }
  };

  const visibleTasks = getVisibleTasks(tasks, filter);

  return (
    <ul>
      {visibleTasks.map(task => {
        return <Task key={task.id} task={task} />;
      })}
    </ul>
  );
};
