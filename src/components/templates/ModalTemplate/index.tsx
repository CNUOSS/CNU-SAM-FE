import React from 'react';
import ReactDOM from 'react-dom';
import * as Style from './styled';

interface ModalTemplateProps {
  children: React.ReactElement;
  closeModal?: () => void;
}

function ModalTemplate({ children, closeModal }: ModalTemplateProps) {
  const modalTag = document.getElementById('modal');

  return (
    modalTag &&
    ReactDOM.createPortal(
      <>
        <Style.Overlay onClick={closeModal} />
        <Style.Container>{children}</Style.Container>
      </>,
      modalTag
    )
  );
}

export default ModalTemplate;
