import React from 'react';
import Button from '@components/widgets/Button';
import Input from '@components/widgets/Input';
import Template from '@components/templates/ModalTemplate';
import SelfDropdownContainer from '@components/containers/SelfDropdownContainer';
import { RegistrationSWType } from '@@types/client';
import { getRestrictionsAPI } from '@apis/data';
import useForm from '@hooks/useForm';
import * as Style from './styled';
import { getManufacturerNamesResponseServer2Client } from '@converter/data';

interface AddManagedSWModalProps {
  registrationSW?: RegistrationSWType;
  isEditable?: boolean;
  closeModal: () => void;
}

type FormType = Pick<RegistrationSWType, 'swName' | 'swManufacturer'>;

function AddManagedSWModal({ registrationSW, isEditable = false, closeModal }: AddManagedSWModalProps) {
  const { change, getValue, error, handleSubmit } = useForm<FormType>({
    swName: [{ error: 'required' }],
    swManufacturer: [{ error: 'required' }],
  });

  const selectManufacturer = (manufacturer: string) => change('swManufacturer')(manufacturer);
  const onSubmit = (data: FormType) => {};

  return (
    <Template closeModal={closeModal}>
      <Style.Container>
        <Style.Header>수업 용 SW 관리 항목에 추가하기</Style.Header>
        <Style.Description>당신의 행동으로 db의 운명이 달렸습니다. 알아서 책임지길 바라요.</Style.Description>
        <Style.InputWrapper>
          <SelfDropdownContainer
            label="SW 제조사"
            width={35}
            inputWidth={20}
            getUrl={getRestrictionsAPI}
            responseConverter={getManufacturerNamesResponseServer2Client}
            onChangeValue={selectManufacturer}
          />
          <Input value={getValue('swName')} label="SW 제품명" width="35rem" onChange={change('swName')} />
        </Style.InputWrapper>
        {error && <Style.Error>값을 모두 채워주세요</Style.Error>}
        <Style.ButtonWrapper>
          {isEditable && registrationSW && (
            <Button theme="warning" onClick={() => {}}>
              삭제하기
            </Button>
          )}
          <Button onClick={handleSubmit(onSubmit)}>{isEditable ? '수정하기' : '등록하기'}</Button>
        </Style.ButtonWrapper>
      </Style.Container>
    </Template>
  );
}

export default AddManagedSWModal;
