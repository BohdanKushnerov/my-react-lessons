import { useState } from 'react';
import css from './Registration.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/authOperations';

export const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const stateAuth = useSelector(state => state.auth);

  console.log(stateAuth);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Email
        <input type="text" name="email" value={email} onChange={handleChange} />
      </label>
      <label>
        Pass
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
