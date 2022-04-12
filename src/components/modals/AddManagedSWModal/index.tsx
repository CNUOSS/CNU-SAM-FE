import React, { useState } from 'react';
import Dropdown from '../../../components/widgets/Dropdown';
import Input from '../../../components/widgets/Input';
import Template from '../Template';
import * as Style from './styled';

interface AddManagedSWModalProps {
  // TODO: can add type to company list? not string?
  // FIXME: remove company list, get from server
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
  const companyList = [...defaultCompanyList, '직접 입력'];
  const [swName, setSWName] = useState(defaultSWName);
  const [companyName, setCompanyName] = useState('');
  const [selfCompanyName, setSelfCompanyName] = useState('');
  const isSelfInput = companyName === '직접 입력';

  const changeSWName = (event: React.ChangeEvent<HTMLInputElement>) => setSWName(event.target.value);
  const changeSelfCompanyName = (event: React.ChangeEvent<HTMLInputElement>) => setSelfCompanyName(event.target.value);
  const changeCompany = (selectedIndex: number) => setCompanyName(companyList[selectedIndex]);
  const handleSubmit = () => onSubmit(isSelfInput ? companyName : selfCompanyName, swName);

  return (
    <Template closeModal={closeModal}>
      <Style.Container>
        <Style.Header>수업 용 SW 관리 항목에 추가하기</Style.Header>
        <Style.Description>당신의 행동으로 db의 운명이 달렸습니다. 알아서 책임지길 바라요.</Style.Description>
        <Style.InputWrapper>
          <Style.CompanyWrapper>
            <Dropdown
              items={companyList}
              label="SW 제조사"
              currentIdx={defaultCompanyIndex}
              width={isSelfInput ? '14rem' : '35rem'}
              onClickItem={changeCompany}
            />
            {isSelfInput && <Input value={selfCompanyName} width="20rem" onChange={changeSelfCompanyName} />}
          </Style.CompanyWrapper>
          <Input value={swName} label="SW 제품명" width="35rem" onChange={changeSWName} />
        </Style.InputWrapper>
        <Style.SubmitButton onClick={handleSubmit}>등록하기</Style.SubmitButton>
      </Style.Container>
    </Template>
  );
}

export default AddManagedSWModal;
