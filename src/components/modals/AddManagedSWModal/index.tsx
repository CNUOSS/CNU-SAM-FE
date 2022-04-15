import React, { useState } from 'react';
import SelfDropdown from '../../../components/widgets/SelfDropdown';
import Input from '../../../components/widgets/Input';
import Template from '../Template';
import * as Style from './styled';

interface AddManagedSWModalProps {
  // TODO: can add type to company list? not string?
  defaultCompanyList: string[];
  defaultCompanyIndex?: number;
  defaultSWName?: string;
  closeModal: () => void;
  onSubmit: (company: string, product: string) => void;
}

function AddManagedSWModal({
  defaultCompanyList,
  defaultCompanyIndex = 0,
  defaultSWName = '',
  onSubmit,
  closeModal,
}: AddManagedSWModalProps) {
  const [swName, setSWName] = useState(defaultSWName);
  const [company, setCompany] = useState('');

  const changeSWName = (event: React.ChangeEvent<HTMLInputElement>) => setSWName(event.target.value);
  const changeCompany = (company: string) => setCompany(company);
  const handleSubmit = () => onSubmit(company, swName);

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
            inputValue={company}
            inputWidth={20}
            onChange={changeCompany}
          />
          <Input value={swName} label="SW 제품명" width="35rem" onChange={changeSWName} />
        </Style.InputWrapper>
        <Style.SubmitButton onClick={handleSubmit}>등록하기</Style.SubmitButton>
      </Style.Container>
    </Template>
  );
}

export default AddManagedSWModal;
