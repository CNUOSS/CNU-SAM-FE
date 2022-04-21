import React, { useState } from 'react';
import SelfDropdown from '../../../components/widgets/SelfDropdown';
import Button from '../../widgets/Button';
import Input from '../../widgets/Input';
import Template from '../../templates/ModalTemplate';
import * as Style from './styled';

interface AddManagedSWModalProps {
  // TODO: can add type to manufacturing list? not string?
  defaultCompanyList: string[];
  defaultCompanyIndex?: number;
  defaultSWName?: string;
  isEditable?: boolean;
  onSubmit: (manufacturing: string, name: string) => void;
  onDelete?: () => void;
  closeModal: () => void;
}

function AddManagedSWModal({
  defaultCompanyList,
  defaultCompanyIndex = 0,
  defaultSWName = '',
  isEditable = false,
  onSubmit,
  onDelete,
  closeModal,
}: AddManagedSWModalProps) {
  const [swName, setSWName] = useState(defaultSWName);
  const [manufacturing, setCompany] = useState('');

  const changeSWName = (event: React.ChangeEvent<HTMLInputElement>) => setSWName(event.target.value);
  const changeCompany = (manufacturing: string) => setCompany(manufacturing);
  const handleSubmit = () => onSubmit(manufacturing, swName);

  return (
    <Template closeModal={closeModal}>
      <Style.Container>
        <Style.Header>수업 용 SW 관리 항목에 추가하기</Style.Header>
        <Style.Description>당신의 행동으로 db의 운명이 달렸습니다. 알아서 책임지길 바라요.</Style.Description>
        <Style.InputWrapper>
          <SelfDropdown
            items={defaultCompanyList}
            label="SW 제조사"
            currentIdx={defaultCompanyIndex}
            width={35}
            inputValue={manufacturing}
            inputWidth={20}
            onChange={changeCompany}
          />
          <Input value={swName} label="SW 제품명" width="35rem" onChange={changeSWName} />
        </Style.InputWrapper>
        <Style.ButtonWrapper>
          {isEditable && onDelete && (
            <Button theme="warning" onClick={onDelete}>
              삭제하기
            </Button>
          )}
          <Button onClick={handleSubmit}>{isEditable ? '수정하기' : '등록하기'}</Button>
        </Style.ButtonWrapper>
      </Style.Container>
    </Template>
  );
}

export default AddManagedSWModal;
