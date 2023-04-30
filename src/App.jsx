import { AppBar } from './components/AppBar/AppBar';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';

export const App = () => {
  return (
    <>
      <AppBar />
      <TodoForm />
      <TodoList />
    </>
  );
};
