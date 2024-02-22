import { Link, useNavigate } from 'react-router-dom';
import { RouteNames } from 'router/routeNames';
import { Menu, Row } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Item from 'antd/es/list/Item';
import { useState } from 'react';

const NavBar = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  console.log('isAuth', isAuth);

  return (
    <Header>
      <Row justify="end">
        {isAuth ? (
          <Menu theme="dark" mode="horizontal">
            <Item
              onClick={() => {
                setIsAuth(false);
                navigate(RouteNames.LOGIN);
              }}
            >
              Log out
            </Item>
          </Menu>
        ) : (
          <Menu theme="dark" mode="horizontal">
            <Item
              onClick={() => {
                setIsAuth(true);
                navigate(RouteNames.CALENDAR);
              }}
            >
              Login
            </Item>
          </Menu>
        )}
      </Row>
    </Header>
  );
};

export default NavBar;
