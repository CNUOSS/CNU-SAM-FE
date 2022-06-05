import React from 'react';
import Template from '@components/templates/ModalTemplate';
import Button from '@components/widgets/Button';
import { DESCRIPTION } from '@common/constants';
import * as Style from './styled';

interface DeleteModalProps {
  onDelete: () => void;
  closeModal: () => void;
}

function DeleteModal({ onDelete, closeModal }: DeleteModalProps) {
  return (
    <Template closeModal={closeModal}>
      <Style.Container>
        <Style.Header>삭제하기</Style.Header>
        <Style.Description>{DESCRIPTION.deleteModal}</Style.Description>
        <Style.ButtonWrapper>
          <Button theme="warning" onClick={onDelete}>
            삭제
          </Button>
          <Button onClick={closeModal}>닫기</Button>
        </Style.ButtonWrapper>
      </Style.Container>
    </Template>
  );
}

export default DeleteModal;
