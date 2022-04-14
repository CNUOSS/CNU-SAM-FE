import React, { useState, useMemo } from 'react';
import TableWidget from '../../../widgets/Table';
import { AddLectureSWListAttr, Trash, Number } from '../../../../@types/types';
import { addLectureSWListAttr } from '../../../../common/constants';
import Dropdown from '../../../widgets/Dropdown';
import Input from '../../../widgets/Input';
import Icon from '../../../widgets/Icon';

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

function Table({ items, companyList, productList, onAddNewItem, onDeleteItem }: TableProps) {
  const [company, setCompany] = useState(companyList[0]);
  const [productName, setProductName] = useState(productList[0]);
  const [license, setLicense] = useState('');

  const changeCompanyName = (selectedIndex: number) => setCompany(companyList[selectedIndex]);
  const changeProductName = (selectedIndex: number) => setProductName(productList[selectedIndex]);
  const changeLicenseName = (event: React.ChangeEvent<HTMLInputElement>) => setLicense(event.target.value);
  const deleteItem = (selectedIndex: number) => onDeleteItem(selectedIndex);
  const addNewItem = () => onAddNewItem({ productName, company, license });

  const parsedItems: RowType[] = useMemo(
    () =>
      items.map((item, index) => ({
        ...item,
        number: index + 1,
        trash: <Icon onClick={() => deleteItem(index)} size="2rem" icon="trashcan" />,
      })),
    []
  );
  const addRow: RowType = {
    number: <Icon onClick={addNewItem} size="2rem" icon="plus" />,
    company: <Dropdown items={companyList} width="20rem" onClickItem={changeCompanyName} />,
    productName: <Dropdown items={productList} width="35rem" onClickItem={changeProductName} />,
    license: <Input value={license} width="35rem" onChange={changeLicenseName} />,
    trash: <></>,
  };

  return <TableWidget items={[addRow, ...parsedItems]} attributes={addLectureSWListAttr} />;
}

export default Table;
