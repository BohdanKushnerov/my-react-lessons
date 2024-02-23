import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Row, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';

import { getAuthState } from '../redux/auth/selectors';
import { login } from '../redux/auth/operations';
import { AppDispatch } from '../redux/store';
import { RouteNames } from '../router/routeNames';
import { logOut, refreshUser } from '../redux/auth/authSlice';

const { Text } = Typography;

const NavBar = () => {
  const navigate = useNavigate();

  const { isAuth, user, isLoading, isError } = useSelector(getAuthState);
  const dispatch: AppDispatch = useDispatch();

  console.log('auth', isAuth);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Header>
        <div>{isLoading && '...Loading'}</div>
        <div>{isError && '...Error'}</div>
        <Row
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
          }}
        >
          {isAuth && <Text type="success">{user.username}</Text>}
          <Menu theme="dark" style={{}}>
            {isAuth ? (
              <Menu.Item
                key={1}
                onClick={() => {
                  dispatch(logOut());
                  navigate(RouteNames.LOGIN);
                }}
              >
                Log out
              </Menu.Item>
            ) : (
              <Menu.Item
                key={2}
                onClick={() => {
                  dispatch(login({ username: 'user', password: '123' })).then(
                    () => navigate(RouteNames.CALENDAR)
                  );
                }}
              >
                Login
              </Menu.Item>
            )}
          </Menu>
        </Row>
      </Header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
