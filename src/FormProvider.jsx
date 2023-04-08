import { createContext, useContext, useState } from 'react';

const formContext = createContext();

export const useFormContext = () => useContext(formContext);

export const FormProvider = ({ initialValue, handleSubmit, children }) => {
  const [login, setLogin] = useState(initialValue.name);
  const [password, setPassword] = useState(initialValue.password);

  const state = {
    login,
    password,
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'login':
        setLogin(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <formContext.Provider value={{ handleChange, handleSubmit, state }}>
      {children}
    </formContext.Provider>
  );
};
