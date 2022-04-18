import React from 'react';
import SelfDropdown from '../../../components/widgets/SelfDropdown';
import Input from '../../../components/widgets/Input';
import Template from '../Template';
import * as Style from './styled';

interface AddOrUpdateSubscribedSWModalProps {
  defaultLicense?: string;
  defaultProduct?: string;
  defaultExpireDate?: string;
  modalState: 'create' | 'update';
  onSubmit: () => void;
  onDelete?: () => void;
  closeModal: () => void;
}

// TODO: make default prosp to state
function AddOrUpdateSubscribedSWModal({
  defaultLicense = '',
  defaultProduct = '',
  defaultExpireDate = '',
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
          <Input label="제품명" width="23rem" value={defaultProduct} onChange={() => {}} />
          <Input label="만료일" width="23rem" value={defaultExpireDate} onChange={() => {}} />
        </Style.InputWrapper>
        <Style.ButtonWrapper>
          {modalState === 'update' && <Style.DeleteButton onClick={onDelete}>삭제하기</Style.DeleteButton>}
          <Style.SubmitButton onClick={handleSubmit}>
            {modalState === 'update' ? '수정하기' : '등록하기'}
          </Style.SubmitButton>
        </Style.ButtonWrapper>
      </Style.Container>
    </Template>
  );
}

export default AddOrUpdateSubscribedSWModal;
