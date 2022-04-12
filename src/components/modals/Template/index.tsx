import React from 'react';
import ReactDOM from 'react-dom';
import * as Style from './styled';

interface TemplateProps {
  children: React.ReactElement;
  closeModal: () => void;
}

function Template({ children, closeModal }: TemplateProps) {
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

export default Template;
