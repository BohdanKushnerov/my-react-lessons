import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Домашняя</Link>
        </li>
        <li>
          <Link to="/dogs"> Коллекция</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Layout;
