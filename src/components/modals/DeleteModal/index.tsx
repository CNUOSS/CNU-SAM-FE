import React from 'react';
import Template from '../../templates/ModalTemplate';
import Button from '../../widgets/Button';
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
        <Style.Description>정말 삭제하시겠습니까?</Style.Description>
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
