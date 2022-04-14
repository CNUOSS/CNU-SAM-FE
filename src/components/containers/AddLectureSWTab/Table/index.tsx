import React, { useState, useMemo } from 'react';
import TableWidget from '../../../widgets/Table';
import { AddLectureSWListAttr, Trash, Number } from '../../../../@types/types';
import { addLectureSWListAttr } from '../../../../common/constants';
import Dropdown from '../../../widgets/Dropdown';
import Input from '../../../widgets/Input';
import Icon from '../../../widgets/Icon';
import * as Style from './styled';

export type ItemType = {
  [key in AddLectureSWListAttr]: string | React.ReactElement;
};

export interface RowType extends ItemType {
  [Number]: number | React.ReactElement;
  [Trash]: React.ReactElement;
}

interface TableProps {
  items: ItemType[];
  companyList: string[];
  productList: string[];
  onAddNewItem: (item: ItemType) => void;
  onDeleteItem: (index: number) => void;
}

// TODO: too many variables,,,
function Table({ items, companyList, productList, onAddNewItem, onDeleteItem }: TableProps) {
  const SELF_INPUT = '직접 입력';
  const [company, setCompany] = useState(companyList[0]);
  const [companySelf, setCompanySelf] = useState('');
  const [productName, setProductName] = useState(productList[0]);
  const [productNameSelf, setProductNameSelf] = useState('');
  const [license, setLicense] = useState('');

  const changeCompanyName = (selectedIndex: number) => setCompany(companyList[selectedIndex] || SELF_INPUT);
  const changeProductName = (selectedIndex: number) => setProductName(productList[selectedIndex] || SELF_INPUT);
  const changeLicenseName = (event: React.ChangeEvent<HTMLInputElement>) => setLicense(event.target.value);
  const changeCompanySelf = (event: React.ChangeEvent<HTMLInputElement>) => setCompanySelf(event.target.value);
  const changeProductNameSelf = (event: React.ChangeEvent<HTMLInputElement>) => setProductNameSelf(event.target.value);
  const deleteItem = (selectedIndex: number) => onDeleteItem(selectedIndex);
  const addNewItem = () => {
    setCompanySelf('');
    setProductNameSelf('');
    setLicense('');
    onAddNewItem({
      productName: productName === SELF_INPUT ? productNameSelf : productName,
      company: company === SELF_INPUT ? companySelf : company,
      license,
    });
  };

  const parsedItems: RowType[] = useMemo(
    () =>
      items.map((item, index) => ({
        ...item,
        number: index + 1,
        trash: <Icon onClick={() => deleteItem(index)} size="2rem" icon="trashcan" />,
      })),
    [items]
  );

  const addRow: RowType = {
    number: <Icon onClick={addNewItem} size="2rem" icon="plus" />,
    company: (
      <Style.DropdownWrapper>
        <Dropdown
          items={[...companyList, SELF_INPUT]}
          width={company === SELF_INPUT ? '9rem' : '18rem'}
          onClickItem={changeCompanyName}
        />
        {company === SELF_INPUT && <Input value={companySelf} onChange={changeCompanySelf} width="8rem" />}
      </Style.DropdownWrapper>
    ),
    productName: (
      <Style.DropdownWrapper>
        <Dropdown
          items={[...productList, SELF_INPUT]}
          width={productName === SELF_INPUT ? '9rem' : '25rem'}
          onClickItem={changeProductName}
        />
        {productName === SELF_INPUT && <Input value={productNameSelf} width="15rem" onChange={changeProductNameSelf} />}
      </Style.DropdownWrapper>
    ),
    license: <Input value={license} width="25rem" onChange={changeLicenseName} />,
    trash: <></>,
  };

  return <TableWidget items={[addRow, ...parsedItems]} attributes={addLectureSWListAttr} />;
}

export default Table;
