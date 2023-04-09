import { Link, Outlet } from 'react-router-dom';

const Dogs = () => {
  return (
    <div>
      {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5'].map(dog => {
        return (
          <li>
            <Link key={dog} to={`${dog}`}>
              {dog}
            </Link>
          </li>
        );
      })}
      <li>
        <Link to="cats">Read about our cat</Link>
      </li>
      <li>
        <Link to="/cats">Read about our cat another page</Link>
      </li>
      <Outlet />
    </div>
  );
};

export default Dogs;
