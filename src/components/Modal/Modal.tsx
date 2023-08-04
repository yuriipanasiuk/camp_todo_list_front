import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { IModalProps } from '../../interface/todo.interface';
import { Backdrop, StyledModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root') as Element;

const Modal = ({ children, onClick }: IModalProps) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  function handleKeyDown(e: KeyboardEvent) {
    if (e.code === 'Escape') {
      onClick();
    }
  }

  function handleBackDropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      onClick();
    }
  }
  return createPortal(
    <Backdrop onClick={handleBackDropClick}>
      <StyledModal>{children}</StyledModal>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
