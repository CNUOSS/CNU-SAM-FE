import React from 'react';
import ReactDOM from 'react-dom';

import useKeyboard from '../../../hooks/useKeyboard';
import * as Style from './styled';

interface ModalInterface {
  children?: React.ReactNode;
  isOpen?: boolean;
  disableEscape?: boolean;
  closeModal: () => void;
}

interface ModalConfirmButtonProps {
  onConfirm: () => void;
  variant?: 'warn' | 'normal';
  text?: string;
}

interface ModalCancelButtonProps {
  onCancel: (() => void) | undefined;
  text?: string;
}

interface ModalCloseButtonProps {
  onClose: () => void;
}

const ModalPortal = ({ children }: Pick<ModalInterface, 'children'>) => {
  const modal = document.querySelector('#modal');
  if (!modal) throw new Error('#modal id div를 찾을 수 없어요');
  return ReactDOM.createPortal(children, modal);
};

const ModalConfirmButton = ({ onConfirm, variant = 'normal', text = '수락하기' }: ModalConfirmButtonProps) => {
  return (
    <button type="button" onClick={onConfirm}>
      {text}
    </button>
  );
};

const ModalCancelButton = ({ onCancel = () => {}, text = '취소하기' }: ModalCancelButtonProps) => {
  return (
    <button type="button" onClick={onCancel}>
      {text}
    </button>
  );
};

const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => {
  return (
    <button type="button" onClick={onClose}>
      x
    </button>
  );
};

const ModalWrapper = ({ isOpen, children, disableEscape, closeModal }: ModalInterface) => {
  useKeyboard({
    keyEvents: [
      {
        key: 'Escape',
        keyEvent: () => {
          if (!disableEscape) closeModal();
        },
      },
    ],
  });

  return (
    <ModalPortal>
      <Style.ModalContainerStyle>
        <Style.Overlay onClick={closeModal} />
        <Style.ModalContent>{children}</Style.ModalContent>
      </Style.ModalContainerStyle>
    </ModalPortal>
  );
};

const ModalContainer = ({ children, ...props }: ModalInterface) => {
  return <ModalWrapper {...props}>{children}</ModalWrapper>;
};

const Modal = Object.assign(ModalContainer, {
  CloseButton: ModalCloseButton,
  CancelButton: ModalCancelButton,
  ConfirmButton: ModalConfirmButton,
});

export default Modal;
