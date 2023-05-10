import { useState } from 'react';
import { Login } from '../Login/Login';
import { Modal } from '../Modal/Modal';
import { Registration } from '../Registration/Registration';

export const AuthNav = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(prevState => !prevState);
  };

  const toggleRegistrationModal = () => {
    setShowRegistrationModal(prevState => !prevState);
  };

  return (
    <>
      <div>
        <button onClick={toggleLoginModal}>Login</button>
        {showLoginModal && (
          <Modal onClose={toggleLoginModal}>
            <Login />
          </Modal>
        )}
      </div>
      <div>
        <button onClick={toggleRegistrationModal}>Registration</button>
        {showRegistrationModal && (
          <Modal onClose={toggleRegistrationModal}>
            <Registration />
          </Modal>
        )}
      </div>
    </>
  );
};
