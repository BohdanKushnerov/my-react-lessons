import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { refetch } from './redux/authOperations';
import { AuthNav } from './components/AuthNav/AuthNav';
import { UserMenu } from './components/UserMenu/UserMenu';
import { refetch } from './redux/authOperations';

export const App = () => {
  const dispatch = useDispatch();

  console.log('App');

  useEffect(() => {
    console.log('useEffect');
    dispatch(refetch());
  }, [dispatch]);

  return (
    <>
      <AuthNav />
      <UserMenu />
    </>
  );
};
