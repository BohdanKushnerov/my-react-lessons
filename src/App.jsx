import { Layout } from './components/Layout/Layout';
import { AppBar } from './components/AppBar/AppBar';
import { TaskList } from './components/TaskList/TaskList';
import { TaskForm } from './components/TaskForm/TaskForm';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm></TaskForm>
      <TaskList></TaskList>
    </Layout>
  );
};
