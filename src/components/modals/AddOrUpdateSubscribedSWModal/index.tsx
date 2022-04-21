import React from 'react';
import SelfDropdown from '../../widgets/SelfDropdown';
import Button from '../../widgets/Button';
import Input from '../../widgets/Input';
import Template from '../../templates/ModalTemplate';
import * as Style from './styled';

interface AddOrUpdateSubscribedSWModalProps {
  defaultLicense?: string;
  defaultSWName?: string;
  defaultExpireDate?: string;
  defaultLastestUpdatedDate?: string;
  modalState: 'create' | 'update';
  onSubmit: () => void;
  onDelete?: () => void;
  closeModal: () => void;
}

// TODO: make default prosp to state
function AddOrUpdateSubscribedSWModal({
  defaultLicense = '',
  defaultSWName = '',
  defaultExpireDate = '',
  defaultLastestUpdatedDate = '',
  modalState,
  closeModal,
  onDelete,
  onSubmit,
}: AddOrUpdateSubscribedSWModalProps) {
  const handleSubmit = () => onSubmit();
  const headerText = `학내 구독중인 SW ${modalState === 'create' ? `등록` : `수정`}하기`;

  return (
    <Template closeModal={closeModal}>
      <Style.Container>
        <Style.Header>{headerText}</Style.Header>
        <Style.Description>화이팅</Style.Description>
        <Style.InputWrapper>
          <SelfDropdown
            items={['1', '2']}
            label="제품군"
            width={23}
            inputWidth={10}
            inputValue=""
            onChange={() => {}}
          />
          <SelfDropdown
            items={['1', '2']}
            label="이용범위"
            width={23}
            inputWidth={10}
            inputValue=""
            onChange={() => {}}
          />
          <SelfDropdown
            items={['1', '2']}
            label="제조사"
            width={23}
            inputWidth={10}
            inputValue=""
            onChange={() => {}}
          />
          <Input label="라이선스" width="23rem" value={defaultLicense} onChange={() => {}} />
          <Input label="제품명" width="23rem" value={defaultSWName} onChange={() => {}} />
          <Input label="만료일" width="23rem" value={defaultExpireDate} onChange={() => {}} />
          <Style.BlankSpace />
          <Input
            label={defaultLastestUpdatedDate ? '최신 업데이트 날짜' : '최초 구독 날짜'}
            width="23rem"
            value={defaultLastestUpdatedDate}
            onChange={() => {}}
          />
        </Style.InputWrapper>
        <Style.ButtonWrapper>
          {modalState === 'update' && onDelete && (
            <Button theme="warning" onClick={onDelete}>
              삭제하기
            </Button>
          )}
          <Button onClick={handleSubmit}>{modalState === 'update' ? '수정하기' : '등록하기'}</Button>
        </Style.ButtonWrapper>
      </Style.Container>
    </Template>
  );
}

export default AddOrUpdateSubscribedSWModal;
