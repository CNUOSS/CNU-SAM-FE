import React from 'react';
import Template from '../../templates/ModalTemplate';
import Input from '../../widgets/Input';
import Button from '../../widgets/Button';
import Dropdown from '../../widgets/Dropdown';
import CheckBox from '../../widgets/Checkbox';
import * as Style from './styled';

interface AddLicenseModalInterface {
  onCreate: () => void;
  closeModal: () => void;
}

function AddLicenseModal({ onCreate, closeModal }: AddLicenseModalInterface) {
  // FIXME: delete
  const restrictions = ['규제1', '규제2'];

  return (
    <Template closeModal={closeModal}>
      <Style.Container>
        <Style.Header>라이선스 생성하기</Style.Header>
        <Style.Description>화이팅</Style.Description>
        <Style.InputWrapper>
          <Input label="라이선스명" width="20rem" value="" onChange={() => {}} />
          <Dropdown label="라이선스 타입" width="18rem" items={[]} onClickItem={() => {}} />
          <Input label="라이선스 url" width="50.3rem" value="" onChange={() => {}} />
        </Style.InputWrapper>
        <Style.RestrictionTitle>규제</Style.RestrictionTitle>
        <Style.RestrictionsWrapper>
          {restrictions.map((r) => (
            <CheckBox key={r} label={r} onClick={() => {}} />
          ))}
        </Style.RestrictionsWrapper>
        <Style.ButtonWrapper>
          <Button onClick={onCreate}>등록하기</Button>
        </Style.ButtonWrapper>
      </Style.Container>
    </Template>
  );
}

export default AddLicenseModal;
