import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/authOperations';

export const UserMenu = () => {
  const authState = useSelector(state => state.auth.user.name);

  const dispatch = useDispatch();

  return (
    <>
      <p>Добро пожаловать, {authState}</p>
      <button onClick={() => dispatch(logOut())} type="button">
        Выйти
      </button>
    </>
  );
};
