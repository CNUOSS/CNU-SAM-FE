import React from 'react';
import Table from '../../widgets/Table';
import Input from '../../widgets/Input';
import TabForm from '../../widgets/TabForm';
import Dropdown from '../../widgets/Dropdown';
import { lectureSWManagementListAttr } from '../../../common/constants';
import { LectureSWManagementListAttr, Number } from '../../../@types/types';
import * as Style from './styled';

export type ItemType = {
  [key in LectureSWManagementListAttr]: string;
};

export interface RowType extends ItemType {
  [Number]: number;
}

interface LecutreSWManagementTabProps {
  // FIXME: remove all
  items: ItemType[];
  companys: string[];
}

function LectureSWManagementTab({ items, companys }: LecutreSWManagementTabProps) {
  const parsedItems: RowType[] = items.map((item, index) => ({ ...item, number: index + 1 }));
  const onSubmit = () => {};

  return (
    <Style.Container>
      <Style.DescriptionWrapper>
        <Style.Description>Description</Style.Description>
        <Style.EnrollButton>등록하기</Style.EnrollButton>
      </Style.DescriptionWrapper>
      <TabForm onSubmit={onSubmit} buttonText="조회하기">
        <Style.InputWrapper>
          <Dropdown label="제조사" items={companys} width="21rem" onClickItem={() => {}} />
          <Input label="제품명" value="" width="21rem" onChange={() => {}} />
        </Style.InputWrapper>
      </TabForm>
      <Style.TableTitle>수업용 SW관리</Style.TableTitle>
      <Style.TableWrapper>
        <Table attributes={lectureSWManagementListAttr} items={parsedItems} />
      </Style.TableWrapper>
    </Style.Container>
  );
}

export default LectureSWManagementTab;
