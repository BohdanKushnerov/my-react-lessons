import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Row, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';

import { getAuthState } from '../redux/auth/selectors';
import { AppDispatch } from '../redux/store';
import { RouteNames } from '../router/routeNames';
import { refreshUser } from '../redux/auth/authSlice';
import { logOut } from '../redux/auth/operations';

const { Text } = Typography;

const NavBar = () => {
  const navigate = useNavigate();

  const { isAuth, user, isLoading } = useSelector(getAuthState);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Header>
        <Row
          style={{
            height: '100%',
            display: 'flex',
            gap: 8,
            justifyContent: 'end',
            alignItems: 'center',
          }}
        >
          {isAuth && <Text type="success">{user.username}</Text>}
          {isAuth ? (
            <Button
              type="primary"
              htmlType="button"
              loading={isLoading}
              onClick={() => {
                dispatch(logOut());
                navigate(RouteNames.LOGIN);
              }}
            >
              Log out
            </Button>
          ) : (
            <Button
              type="primary"
              htmlType="button"
              onClick={() => navigate(RouteNames.LOGIN)}
            >
              Login
            </Button>
          )}
        </Row>
      </Header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
