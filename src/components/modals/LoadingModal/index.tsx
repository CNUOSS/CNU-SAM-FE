import React from 'react';
import ModalTemplate from '@components/templates/ModalTemplate';
import * as Style from './styled';

function LoadingModal() {
  return (
    <ModalTemplate>
      <Style.Container>
        <Style.Overlay />
        <Style.Loader />
      </Style.Container>
    </ModalTemplate>
  );
}

export default LoadingModal;
