import { useState } from 'react';
import css from './Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/authOperations';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const stateAuth = useSelector(state => state.auth);

  console.log(stateAuth);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <p>L: "yayaya@mail.com" P:"weqew123"</p>
      <label>
        Email
        <input type="text" name="email" value={email} onChange={handleChange} />
      </label>
      <label>
        Password
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
