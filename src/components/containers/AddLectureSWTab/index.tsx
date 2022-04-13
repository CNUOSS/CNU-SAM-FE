import React, { useState } from 'react';
import Dropdown from '../../widgets/Dropdown';
import Input from '../../widgets/Input';
import { AddLectureSWListAttr, Trash, Number } from '../../../@types/types';
import { addLectureSWListAttr } from '../../../common/constants';
import * as Style from './styled';
import Table from '../../widgets/Table';
import Icon from '../../widgets/Icon';

const year = new Date().getFullYear();
const ORGANIZATION = ['학부', '공과대학원'];
const SEMESTER = ['1학기', '2학기', '계절학기'];
const DIVISION = ['전공(핵심)', '교양(필수)'];
const YEARS = [year - 1, year, year + 1].map((year) => String(year));

export type ItemType = {
  [key in AddLectureSWListAttr]: string | React.ReactElement;
};

interface RowType extends ItemType {
  [Number]: number | React.ReactElement;
  [Trash]: React.ReactElement;
}

interface AddLectureSWTabProps {
  items?: ItemType[];
  companyList: string[];
  productList: string[];
}

// TODO: seperate Trash component
// TODO: add delete logic to trash component
function AddLectureSWTab({ items = [], companyList, productList }: AddLectureSWTabProps) {
  const parseItems = (): RowType[] =>
    items.map((item, index) => ({
      ...item,
      number: index + 1,
      trash: (
        <Style.IconWrapper>
          <Icon icon="trashcan" />
        </Style.IconWrapper>
      ),
    }));
  const [companyName, setCompanyName] = useState('');
  const [productName, setProductName] = useState('');
  const [licenseName, setLicenseName] = useState('');
  const [parsedItems, setParsedItems] = useState<RowType[]>(parseItems());

  const changeCompanyName = (selectedIndex: number) => setCompanyName(companyList[selectedIndex]);
  const changeProductName = (selectedIndex: number) => setProductName(productList[selectedIndex]);
  const changeLicenseName = (event: React.ChangeEvent<HTMLInputElement>) => setLicenseName(event.target.value);
  const addNewItem = () => {
    const newItem: RowType = {
      number: 1,
      productName,
      company: companyName,
      license: licenseName,
      trash: (
        <Style.IconWrapper>
          <Icon icon="trashcan" />
        </Style.IconWrapper>
      ),
    };
    const numberUpdated = parsedItems.map(({ number, ...others }) => ({ number: (number as number) + 1, ...others }));
    setParsedItems([newItem, ...numberUpdated]);
  };

  const addRow: RowType = {
    number: (
      <Style.IconWrapper onClick={addNewItem}>
        <Icon icon="plus" />
      </Style.IconWrapper>
    ),
    company: <Dropdown items={companyList} width="20rem" onClickItem={changeCompanyName} />,
    productName: <Dropdown items={productList} width="35rem" onClickItem={changeProductName} />,
    license: <Input value={licenseName} width="35rem" onChange={changeLicenseName} />,
    trash: <></>,
  };

  // TODO: seperate table logic
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
        <Table items={[addRow, ...parsedItems]} attributes={addLectureSWListAttr} />
      </Style.TableWrapper>
    </Style.Container>
  );
}

export default AddLectureSWTab;
