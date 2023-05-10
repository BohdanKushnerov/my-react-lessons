import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { useEffect } from 'react';

export const Modal = ({ onClose, children }) => {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return createPortal(
    <div className={css.overlay}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
};
