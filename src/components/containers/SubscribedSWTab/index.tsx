import React from 'react';
import Table from '../../widgets/Table';
import Input from '../../widgets/Input';
import TabForm from '../../widgets/TabForm';
import Dropdown from '../../widgets/Dropdown';
import { subscibedSWListAttr } from '../../../common/constants';
import { SubscribedSWListAttr, Number } from '../../../@types/types';
import * as Style from './styled';

export type ItemType = {
  [key in SubscribedSWListAttr]: string;
};

export interface RowType extends ItemType {
  [Number]: number;
}

interface SubscribedSWTabProps {
  items: ItemType[];
  companys: string[];
  productFamilys: string[];
}

function SubscribedSWTab({ items, companys, productFamilys }: SubscribedSWTabProps) {
  const parsedItems: RowType[] = items.map((item, index) => ({ ...item, number: index + 1 }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Style.Container>
      <Style.DescriptionWrapper>
        <Style.Description>Description</Style.Description>
        <Style.EnrollButton>등록하기</Style.EnrollButton>
      </Style.DescriptionWrapper>
      <TabForm onSubmit={handleSubmit} buttonText="조회하기">
        <Dropdown label="제품군" items={productFamilys} width="21rem" onClickItem={() => {}} />
        <Dropdown label="제조사" items={companys} width="21rem" onClickItem={() => {}} />
        <Input label="제품명" value="" width="21rem" onChange={() => {}} />
      </TabForm>
      <Style.TableTitle>학내 구독 중인 SW</Style.TableTitle>
      <Style.TableWrapper>
        <Table attributes={subscibedSWListAttr} items={parsedItems} />
      </Style.TableWrapper>
    </Style.Container>
  );
}

export default SubscribedSWTab;
