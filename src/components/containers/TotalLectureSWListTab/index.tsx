import React from 'react';
import Input from '../../widgets/Input';
import Dropdown from '../../widgets/Dropdown';
import Table from '../../widgets/Table';
import { TotalLectureSWListAttr } from '../../../@types/types';
import { totalLectureSWListAttr } from '../../../common/constants';
import * as Style from './styled';

const year = new Date().getFullYear();
const ORGANIZATION = ['학부', '공과대학원'];
const SEMESTER = ['1학기', '2학기', '계절학기'];
const DIVISION = ['전공(핵심)', '교양(필수)'];
const YEARS = [year - 1, year, year + 1].map((year) => String(year));

export type ItemType = {
  [key in TotalLectureSWListAttr]: string;
};

// TODO: remove this
interface TotalLectureSWListProps {
  items: ItemType[];
  isAdmin: boolean;
}

function TotalLectureSWListTab({ items, isAdmin }: TotalLectureSWListProps) {
  return (
    <Style.Container>
      <Style.Description>Description</Style.Description>
      <Style.Form>
        <Style.InputList>
          <Dropdown items={ORGANIZATION} label="조직분류" width="16rem" onClickItem={() => {}} />
          <Dropdown items={YEARS} label="년도" width="10rem" onClickItem={() => {}} />
          <Dropdown items={SEMESTER} label="학기" width="8rem" onClickItem={() => {}} />
          <Dropdown items={DIVISION} label="이수구분" width="13rem" onClickItem={() => {}} />
          <Input value="" label="과목이름" width="20rem" onChange={() => {}} />
          <Input value="" label="과목번호" width="14rem" onChange={() => {}} />
          <Input value="" label="등록자" width="14rem" onChange={() => {}} />
        </Style.InputList>
        <Style.InquireButton>조회하기</Style.InquireButton>
      </Style.Form>
      <Style.TableTitle>등록된 수업용 SW</Style.TableTitle>
      <Style.TableWrapper>
        <Table items={items} attributes={totalLectureSWListAttr} />
      </Style.TableWrapper>
    </Style.Container>
  );
}

export default TotalLectureSWListTab;
