import { createContext, useContext, useReducer, useState } from 'react';

const formContext = createContext();

export const useFormContext = () => useContext(formContext);

export const FormProvider = ({ initialValue, handleSubmit, children }) => {
  // const [login, setLogin] = useState(initialValue.name);
  // const [password, setPassword] = useState(initialValue.password);

  // const state = {
  //   login,
  //   password,
  // };

  // const handleChange = e => {
  //   const { name, value } = e.currentTarget;

  //   switch (name) {
  //     case 'login':
  //       setLogin(value);
  //       break;

  //     case 'password':
  //       setPassword(value);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  //==============================================

  const reducer = (state, action) => {
    switch (action.type) {
      case 'login':
        return { ...state, login: action.payload };
      case 'password':
        return { ...state, password: action.payload };
      case 'reset':
        return initialValue;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'login':
        dispatch({ type: 'login', payload: value });
        break;
      case 'password':
        dispatch({ type: 'password', payload: value });
        break;
      default:
        break;
    }
  };

  return (
    <formContext.Provider
      value={{ handleChange, handleSubmit, state, dispatch }}
    >
      {children}
    </formContext.Provider>
  );
};
