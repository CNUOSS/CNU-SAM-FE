import React, { useState } from 'react';
import Dropdown from '../../widgets/Dropdown';
import Input from '../../widgets/Input';
import * as Style from './styled';
import Table, { ItemType } from './Table';

const year = new Date().getFullYear();
const ORGANIZATION = ['학부', '공과대학원'];
const SEMESTER = ['1학기', '2학기', '계절학기'];
const DIVISION = ['전공(핵심)', '교양(필수)'];
const YEARS = [year - 1, year, year + 1].map((year) => String(year));

interface AddLectureSWTabProps {
  receivedItems?: ItemType[];
  companyList: string[];
  productList: string[];
}

function AddLectureSWTab({ receivedItems = [], companyList, productList }: AddLectureSWTabProps) {
  const [items, setItems] = useState<ItemType[]>(receivedItems);

  const addNewItem = (newItem: ItemType) => setItems((prev) => [newItem, ...prev]);
  const deleteItem = (selectedIndex: number) => setItems((prev) => prev.filter((_, i: number) => i !== selectedIndex));

  return (
    <Style.Container>
      <Style.Description>Description</Style.Description>
      <Style.FormTitleWrapper>
        <Style.FormTitle>수업 정보 작성</Style.FormTitle>
        <Style.SubmitButton>등록하기</Style.SubmitButton>
      </Style.FormTitleWrapper>
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
      </Style.Form>
      <Style.TableTitle>등록된 수업용 SW</Style.TableTitle>
      <Style.TableWrapper>
        <Table
          items={items}
          companyList={companyList}
          productList={productList}
          onAddNewItem={addNewItem}
          onDeleteItem={deleteItem}
        />
      </Style.TableWrapper>
    </Style.Container>
  );
}

export default AddLectureSWTab;
